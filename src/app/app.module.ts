import { FaceidComponent } from "./faceid/faceid.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MapComponent } from "./map/map.component";
import { FingerprintComponent } from "./fingerprint/fingerprint.component";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@NgModule({
  declarations: [
    AppComponent,
    FingerprintComponent,
    FaceidComponent,
    MapComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    FingerprintComponent,
    FingerprintAIO,

    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
