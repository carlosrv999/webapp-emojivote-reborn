import { Component, HostListener, OnInit } from '@angular/core';
import { Emoji } from './shared/emoji.model';
import { HttpClient } from "@angular/common/http";
import { EmojiService } from './shared/emoji.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emojivote';

  emojis: Emoji[] = [];
  colors: string[] = [];

  breakpoint: number = 6;

  constructor( private emojiService: EmojiService, private http: HttpClient ) {

  }

  ngOnInit() {
    console.log(this.colors)
    this.initializeColors()
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;

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

  onVote(dsadsa: Emoji) {
    console.log("has votado por: ", dsadsa)
  }
}

