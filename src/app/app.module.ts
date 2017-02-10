import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { NewPage } from '../pages/new-page/new-page';
import { NextPage } from '../pages/next/next';
import { HeaderCommon } from '../components/common-header/common-header';
import { ListNameValue } from '../components/list-name-value/list-name-value';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
	  NewPage,
    NextPage,
    HeaderCommon,
    ListNameValue
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
	  NewPage,
    NextPage,
    HeaderCommon,
    ListNameValue
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
