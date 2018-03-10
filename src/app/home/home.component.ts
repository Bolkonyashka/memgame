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
  }

  cardsGeneration() {
    var fullPool = [ "0C", "0D", "0H", "0S", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S",
     "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S",
      "AC", "AD", "AH", "AS", "JC", "JD", "JH", "JS", "KC", "KD", "KH", "KS", "QC", "QD", "QH", "QS" ];
    var randomPool = [];
    while (randomPool.length < 9) {
      var randomCard = fullPool[Math.floor(Math.random() * fullPool.length)];
      if (randomPool.indexOf(randomCard) === -1) {
        randomPool.push(randomCard);
        var card = new GameCard(randomCard, "../../../assets/Cards/" + randomCard + ".png", true ,"1" + randomCard, "Card-flipped");
        this.cards.push(card);
        var card = new GameCard(randomCard, "../../../assets/Cards/" + randomCard + ".png", true ,"2" + randomCard, "Card-flipped");
        this.cards.push(card);
       }
    }
    this.cards.sort(function(){ return 0.5-Math.random() });
  }

  gameStart() {
    this.gameMod.gameStarted = true;
    setTimeout(this.cardsReverse, 1000, this.cards, this.gameMod, false);
    setTimeout(this.cardsReverse, 6000, this.cards, this.gameMod, true);
  }

  cardsReverse(cards: GameCard[], gameMod: GameModel, readyStat: boolean) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.cardHidden = !card.cardHidden;
      if (card.cardHidden) {
        card.testID = "Card-flipped";
      } else {
        card.testID = "Card";
      }
    }
    gameMod.gameReady = readyStat;
  }

  cardClick(cID: string) {
    if (this.gameMod.gameReady === true && (this.gameMod.openCardNum === 0 || (this.gameMod.openCardNum === 1 &&  cID != this.gameMod.openCardFirst.cardID))) {
      this.gameMod.gameReady = false;
      var card = new GameCard("", "", true, "", "");
      for (var i = 0; i < this.cards.length; i++) {
        if (this.cards[i].cardID === cID) {
          card = this.cards[i];
          card.cardHidden = false;
          card.testID = "Card";
        }
      }
      this.gameMod.openCardNum += 1;
      if (this.gameMod.openCardNum === 2) {
        this.gameMod.openCardSecond = card;
        this.scoreCounter();
        this.gameMod.openCardNum = 0;
      } else {
        this.gameMod.openCardFirst = card;
        this.gameMod.gameReady = true;
      }
      
    }
  }

  scoreCounter() {
    if (this.gameMod.openCardFirst.cardValue === this.gameMod.openCardSecond.cardValue) {    
      this.gameMod.unsolvedPairs -= 1;
      this.gameMod.gameScore += 42 * this.gameMod.unsolvedPairs;
      setTimeout(this.cardsSolved, 1500, this.gameMod);
    } else {
      if (this.gameMod.gameScore <= 42 * (9 - this.gameMod.unsolvedPairs)) {
        this.gameMod.gameScore = 0;
      } else {
        this.gameMod.gameScore -= 42 * (9 - this.gameMod.unsolvedPairs);
      }
      setTimeout(this.cardsHide, 1500, this.gameMod);
    } 
    if (this.gameMod.unsolvedPairs === 0) {//game end
      setTimeout(this.gameFinish, 2000, this.gameMod);
    }
  }

  gameFinish(gameMod: GameModel) {
    gameMod.gameStarted = false;
    gameMod.gameFinished = true;
  }
  
  cardsHide(gameMod: GameModel) {
    gameMod.openCardFirst.cardHidden = true;
    gameMod.openCardFirst.testID = "Card-flipped";
    gameMod.openCardSecond.cardHidden = true;
    gameMod.openCardSecond.testID = "Card-flipped";
    gameMod.gameReady = true;
  }

  cardsSolved(gameMod: GameModel) {
    gameMod.openCardFirst.isSolved = true;
    gameMod.openCardSecond.isSolved = true;
    gameMod.gameReady = true;
  }

  gameRestart() {
    this.cards = [];
    this.cardsGeneration();
    this.gameMod = new GameModel();
    this.gameStart();
  }

}
