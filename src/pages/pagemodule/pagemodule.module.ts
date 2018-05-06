import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagemodulePage } from './pagemodule';

@NgModule({
  declarations: [
    PagemodulePage,
  ],
  imports: [
    IonicPageModule.forChild(PagemodulePage),
  ],
})
export class PagemodulePageModule {}
