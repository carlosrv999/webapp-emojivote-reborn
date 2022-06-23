import { Component, HostListener, OnInit } from '@angular/core';
import { Emoji } from './shared/emoji.model';

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

  ngOnInit() {
    console.log(this.colors)
    this.initializeColors()
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;

  }

  initializeColors() {
    var emoji1: Emoji = {
      id: 1,
      emoji: "🙂",
      description: "Dsadsadsa"
    }
    var emoji2: Emoji = {
      id: 2,
      emoji: "🤣",
      description: "Dsadsadsa"
    }
    var emoji3: Emoji = {
      id: 3,
      emoji: "🥰",
      description: "Dsadsadsa"
    }
    var emoji4: Emoji = {
      id: 4,
      emoji: "🤢",
      description: "Dsadsadsa"
    }
    var emoji5: Emoji = {
      id: 5,
      emoji: "🥶",
      description: "Dsadsadsa"
    }
    var emoji6: Emoji = {
      id: 6,
      emoji: "😳",
      description: "Dsadsadsa"
    }
    var emoji7: Emoji = {
      id: 7,
      emoji: "🥩",
      description: "Dsadsadsa"
    }
    this.emojis.push(emoji1)
    this.emojis.push(emoji2)
    this.emojis.push(emoji3)
    this.emojis.push(emoji4)
    this.emojis.push(emoji5)
    this.emojis.push(emoji6)
    this.emojis.push(emoji7)
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    this.colors.push(this.getRandomColor())
    console.log("initializing colors")
  }

  getRandomColor() {
    return "#"+<string>Math.floor(Math.random()*16777215).toString(16);
  }
  

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;
  }
}

