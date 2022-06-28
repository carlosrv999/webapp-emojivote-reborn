import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Emoji } from "./emoji.model";
import { map } from 'rxjs/operators';

@Injectable()
export class EmojiService {

  constructor (private http: HttpClient) { }

  getEmojis() {
    return this.http.get<Emoji[]>('https://3af82c1e4a8e43e699ad52d6a2f7c67e.apig.la-south-2.huaweicloudapis.com/emoji')
      .pipe(
        map(responseData => {
          const postsArray: Emoji[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push(responseData[key]);
            }
          }
          return postsArray;
        })
      )
  }

}