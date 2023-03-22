import { Injectable } from '@angular/core';
import * as crypt from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  key: string = "dre56%3cbbtd3a2efnyftg@G";

  constructor() { }

  encrypt(data: string) {
    return crypt.SHA256(data).toString();
  }

  decrypt(data: string) {
    return crypt.AES.decrypt(data, this.key).toString(crypt.enc.Utf8);
  }
}
