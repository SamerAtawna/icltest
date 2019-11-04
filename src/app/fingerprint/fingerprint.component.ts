import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss']
})
export class FingerprintComponent implements OnInit {
  constructor(private faio: FingerprintAIO, private platform: Platform) {}

  ngOnInit() {}

  async fingerPrintRecog() {
    try {
      await this.platform.ready();
      const identify = this.faio.show({
        clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
        clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
        disableBackup: true // Only for Android(optional)
      })
      .then((result: any) => {
        console.log('result', result);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
      console.log(identify);
    } catch {
    }


  }
}
