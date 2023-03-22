import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  key: string = "dre56%3cbbtd3a2efnyftg@G";

  constructor() { }

  encrypt(data: string) {
    return CryptoJS.AES.encrypt(data, this.key).toString();
  }

  decrypt(data: string) {
    return CryptoJS.AES.decrypt(data, this.key).toString(CryptoJS.enc.Utf8);
  }
}
