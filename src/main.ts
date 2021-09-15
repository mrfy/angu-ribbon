import * as d from '@synapstry/ribbon-wc';

import { AppModule } from './app/app.module';
// import { dsd } from '@synapstry/ribbon-wc';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

console.log('🚀 ~ file: app.module.ts ~ line 2 ~ d', d);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
