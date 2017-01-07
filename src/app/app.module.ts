import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { StudioListComponent } from './components/studio-list/studio-list.component';
import { StudioService } from '../providers/studio-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudioListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudioListComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StudioService
  ]
})
export class AppModule { }
