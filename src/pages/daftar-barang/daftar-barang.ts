import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RincianBarangPage } from '../rincian-barang/rincian-barang';

@IonicPage()
@Component({
  selector: 'page-daftar-barang',
  templateUrl: 'daftar-barang.html',
})
export class DaftarBarangPage {

  barang = [
    {
      "id" : 0,
      "image" : "https://asset.kompas.com/crop/20x0:992x648/750x500/data/photo/2018/01/14/2342554562.jpg",
      "nama" : "nama barang nama barang nama barang nama barang nama barang nama barang",
      "price" : "10.000",
      "favorit" : false
    },
    {
      "id" : 1,
      "image" : "https://asset.kompas.com/crop/20x0:992x648/750x500/data/photo/2018/01/14/2342554562.jpg",
      "nama" : "nama barang",
      "price" : "10.000",
      "favorit" : false
    },
    {
      "id" : 2,
      "image" : "https://asset.kompas.com/crop/20x0:992x648/750x500/data/photo/2018/01/14/2342554562.jpg",
      "nama" : "nama barang",
      "price" : "10.000",
      "favorit" : false
    },
    {
      "id" : 3,
      "image" : "https://asset.kompas.com/crop/20x0:992x648/750x500/data/photo/2018/01/14/2342554562.jpg",
      "nama" : "nama barang",
      "price" : "10.000",
      "favorit" : false
    },
    {
      "id" : 4,
      "image" : "https://asset.kompas.com/crop/20x0:992x648/750x500/data/photo/2018/01/14/2342554562.jpg",
      "nama" : "nama barang",
      "price" : "10.000",
      "favorit" : false
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarBarangPage');
  }

  ubahFav(data){
    this.barang[data.id].favorit = !this.barang[data.id].favorit 
  }

  bukaRinci(data){
    this.navCtrl.push(RincianBarangPage, data)
  }

}
