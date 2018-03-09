import { Component, OnInit } from '@angular/core';
import { GameCard, GameModel } from '../_models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: GameCard[] = [];
  gameMod: GameModel;

  constructor() { }

  ngOnInit() {
    this.cardsGeneration();
    this.gameMod = new GameModel();
    this.gameMod.gameReady = false;
    this.gameMod.gameScore = '0';
  }

  cardsGeneration() {
    //var rankPool = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "J", "K", "Q" ];
    //var suitPool = [ "C", "D", "H", "S" ];
    var fullPool = [ "0C", "0D", "0H", "0S", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S",
     "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S",
      "AC", "AD", "AH", "AS", "JC", "JD", "JH", "JS", "KC", "KD", "KH", "KS", "QC", "QD", "QH", "QS" ];
    //var excludePool = [];
    var randomPool = [];
    while (randomPool.length < 9) {
      var randomCard = fullPool[Math.floor(Math.random() * fullPool.length)];
      if (randomPool.indexOf(randomCard) === -1) {
        randomPool.push(randomCard);
        var card = new GameCard();
        card.cardValue = randomCard;
        card.cardImg = "../../../assets/Cards/" + randomCard + ".png"
        this.cards.push(card);
        this.cards.push(card);
       }
    }
    this.cards.sort(function(){ return 0.5-Math.random() });
    //alert(randomPool);
  }

  gameStart() {
    //this.cardsGeneration();
    setTimeout(this.cardsHide, 5000, this.cards, this.gameMod);
    //this.gameReady = true;
    //alert("wau");
  }

  cardsHide(cards: GameCard[], gameMod: GameModel) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.cardImg = "../../../assets/Cards/back.png";
    }
    //alert("ffdf");
    gameMod.gameReady = true;
    //alert(this.gameReady);
  }

  cardClick() {
    if (this.gameMod.gameReady === true) {
       alert("pups");
    }
    //alert("fdfd");
  }

}
