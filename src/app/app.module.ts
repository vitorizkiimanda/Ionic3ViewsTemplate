import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JudulPage } from '../pages/judul/judul';
import { GambarPage } from '../pages/gambar/gambar';
import { VideoPage } from '../pages/video/video';
import { TombolPage } from '../pages/tombol/tombol';
import { DaftarPage } from '../pages/daftar/daftar';
import { KartuPage } from '../pages/kartu/kartu';
import { MasukPage } from '../pages/masuk/masuk';
import { PeringatanPage } from '../pages/peringatan/peringatan';
import { LoadingPage } from '../pages/loading/loading';
import { TempPage } from '../pages/temp/temp';
import { DaftarBarangPage } from '../pages/daftar-barang/daftar-barang';
import { RincianBarangPage } from '../pages/rincian-barang/rincian-barang';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JudulPage,
    GambarPage,
    VideoPage,
    TombolPage,
    DaftarPage,
    KartuPage,
    MasukPage,
    PeringatanPage,
    LoadingPage,
    DaftarBarangPage,
    RincianBarangPage,
    TempPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JudulPage,
    GambarPage,
    VideoPage,
    TombolPage,
    DaftarPage,
    KartuPage,
    MasukPage,
    PeringatanPage,
    LoadingPage,
    DaftarBarangPage,
    RincianBarangPage,
    TempPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
