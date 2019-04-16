import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GambarPage } from './gambar';

@NgModule({
  declarations: [
    GambarPage,
  ],
  imports: [
    IonicPageModule.forChild(GambarPage),
  ],
})
export class GambarPageModule {}
