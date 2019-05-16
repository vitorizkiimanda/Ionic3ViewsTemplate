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
import { DaftarBarangPage } from '../daftar-barang/daftar-barang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  colorLoop : any = 1

  data = [
    {
      "title" : "Judul",
      "color" : this.randomColor()
    },
    {
      "title" : "Gambar",
      "color" : this.randomColor()
    },
    {
      "title" : "Video",
      "color" : this.randomColor()
    },
    {
      "title" : "Tombol",
      "color" : this.randomColor()
    },
    {
      "title" : "Daftar (list)",
      "color" : this.randomColor()
    },
    {
      "title" : "Daftar Barang",
      "color" : this.randomColor()
    },
    {
      "title" : "Kartu",
      "color" : this.randomColor()
    },
    {
      "title" : "Halaman Masuk (login)",
      "color" : this.randomColor()
    },
    {
      "title" : "Peringatan (Alert)",
      "color" : this.randomColor()
    },
    {
      "title" : "Loading",
      "color" : this.randomColor()
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  buka(data){
    if(data == "Judul") this.navCtrl.push(JudulPage)
    if(data == "Gambar") this.navCtrl.push(GambarPage)
    if(data == "Video") this.navCtrl.push(VideoPage) 
    if(data == "Tombol") this.navCtrl.push(TombolPage) 
    if(data == "Daftar (list)") this.navCtrl.push(DaftarPage) 
    if(data == "Daftar Barang") this.navCtrl.push(DaftarBarangPage) 
    if(data == "Kartu") this.navCtrl.push(KartuPage) 
    if(data == "Halaman Masuk (login)") this.navCtrl.push(MasukPage) 
    if(data == "Peringatan (Alert)") this.navCtrl.push(PeringatanPage) 
    if(data == "Loading") this.navCtrl.push(LoadingPage) 
  }

  randomColor(){
    if(this.colorLoop>4) this.colorLoop = 1
    switch(this.colorLoop++){
      case 1:{
        return "primary"
      }
      case 2:{
        return "secondary"
      }
      case 3:{
        return "danger"
      }
      case 4:{
        return "dark"
      }
      default: return "primary"
    }
  }


}
