import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vote } from "./vote.model";
import { map } from 'rxjs/operators';

@Injectable()
export class VotingService {

  constructor(private http: HttpClient) { }

  postVote(emoji_id: number) {
    return this.http.post('https://3af82c1e4a8e43e699ad52d6a2f7c67e.apig.la-south-2.huaweicloudapis.com/votes', { "emoji_id": emoji_id })
  }

  getVotes() {
    return this.http.get<Vote[]>('https://3af82c1e4a8e43e699ad52d6a2f7c67e.apig.la-south-2.huaweicloudapis.com/votes')
      .pipe(
        map(responseData => {
          const postsArray: Vote[] = [];
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