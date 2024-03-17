import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, doc, Firestore, setDoc, updateDoc,} from "@angular/fire/firestore";
import {LogEntry} from "@project-mike/life-tracker/life-tracker-data-access";
import {AuthService} from "@project-mike/shared/shared-data-access";
import {of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LifeTrackerService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private entries$ = collection(this.firestore, 'logEntry');

  public getLogEntries() {
    return collectionData(this.entries$);
  }

  public addLogEntry(entry: LogEntry) {
    return this.authService.getUser().pipe(
      switchMap(user => {
        if (user) {
          entry.userId = user.uid;
          entry.date = new Date();
          return of(addDoc(this.entries$, entry));
        } else {
          return of({})
        }
      })
    )
  }

  public updateLogEntry(entryId: string, entry: LogEntry) {
    const document = doc(this.entries$, entryId);
    return of(setDoc(doc(this.firestore, 'LogEntry', entryId), entry))
  }

}
