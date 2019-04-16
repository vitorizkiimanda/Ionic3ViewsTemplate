import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JudulPage } from '../judul/judul';
import { GambarPage } from '../gambar/gambar';
import { VideoPage } from '../video/video';

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
    
  }


}
