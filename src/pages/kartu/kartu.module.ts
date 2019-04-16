import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KartuPage } from './kartu';

@NgModule({
  declarations: [
    KartuPage,
  ],
  imports: [
    IonicPageModule.forChild(KartuPage),
  ],
})
export class KartuPageModule {}
