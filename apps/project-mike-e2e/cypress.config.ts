import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run project-mike:serve:development',
        production: 'nx run project-mike:serve:production',
      },
      ciWebServerCommand: 'nx run project-mike:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
