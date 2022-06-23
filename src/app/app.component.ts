import { Component, HostListener, OnInit } from '@angular/core';
import { Emoji } from './shared/emoji.model';
import { HttpClient } from "@angular/common/http";
import { EmojiService } from './shared/emoji.service';
import { VotingService } from './shared/voting.service';
import { Vote } from './shared/vote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emojivote';

  emojis: Emoji[] = [];
  colors: string[] = [];
  votes: Vote[] = [];

  breakpoint: number = 6;

  constructor( private emojiService: EmojiService, private votingService: VotingService, private http: HttpClient ) {

  }

  ngOnInit() {
    console.log(this.colors)
    this.initializeColors();
    this.initializeVotes();
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;

  }

  initializeVotes() {
    this.votingService.getVotes()
      .subscribe(responseData => {
        console.log("votos")
        console.log(responseData)
        this.votes = responseData
      })
  }

  initializeColors() {

    this.emojiService.getEmojis()
      .subscribe(responseData => {
        console.log("xzxdxd")
        console.log(responseData)
        this.emojis = responseData
        for (let emoji of responseData) {
          this.colors.push(this.getRandomColor())
        }
      })

    console.log("initializing colors")
  }

  getRandomColor() {
    return "#"+<string>Math.floor(Math.random()*16777215).toString(16);
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;
  }

  onVote(emoji: Emoji) {
    console.log("has votado por: ", emoji)
    this.votingService.postVote(emoji.id).subscribe(responseData => {
      console.log("ya cargo la data")
      console.log(responseData)
    })
  }

}

