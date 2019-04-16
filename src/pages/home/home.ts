import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JudulPage } from '../judul/judul';
import { GambarPage } from '../gambar/gambar';
import { VideoPage } from '../video/video';
import { TombolPage } from '../tombol/tombol';
import { DaftarPage } from '../daftar/daftar';
import { KartuPage } from '../kartu/kartu';
import { MasukPage } from '../masuk/masuk';
import { PeringatanPage } from '../peringatan/peringatan';
import { LoadingPage } from '../loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = [
    "Judul",
    "Gambar",
    "Video",
    "Tombol",
    "Daftar",
    "Kartu",
    "Masuk/Daftar",
    "Peringatan (Alert)",
    "Loading"
  ]

  constructor(public navCtrl: NavController) {
  }

  buka(data){
    if(data == "Judul") this.navCtrl.push(JudulPage)
    if(data == "Gambar") this.navCtrl.push(GambarPage)
    if(data == "Video") this.navCtrl.push(VideoPage) 
    if(data == "Tombol") this.navCtrl.push(TombolPage) 
    if(data == "Daftar") this.navCtrl.push(DaftarPage) 
    if(data == "Kartu") this.navCtrl.push(KartuPage) 
    if(data == "Masuk/Daftar") this.navCtrl.push(MasukPage) 
    if(data == "Peringatan (Alert)") this.navCtrl.push(PeringatanPage) 
    if(data == "Loading") this.navCtrl.push(LoadingPage) 
  }


}
