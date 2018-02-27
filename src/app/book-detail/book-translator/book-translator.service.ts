import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface YandexResponse {
  code: number;
  lang: string;
  text: string[];
}

@Injectable()
export class BookTranslatorService {
  private nextId: number;

  constructor(private http: HttpClient){}

  getTranslate(text){
      let key = "trnsl.1.1.20170529T113113Z.c408ade656ac97bb.837c9111c0509a9f4b5990177c46574d4fe4066c",
          lang = "en-ru",
          format = "html",
          urlString = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&text=" + text + "&lang=" + lang + "&format=" + format;

          return this.http.get<YandexResponse>(urlString);
      }
}
