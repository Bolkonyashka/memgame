export class GameCard{
    cardValue: string;
    cardImg: string;
    cardHidden: boolean;
    cardID: string;
    isSolved: boolean = false;

    constructor(cVal: string, cImg: string, cHidden: boolean, cID: string) {
      this.cardValue = cVal;
      this.cardImg = cImg;
      this.cardHidden = cHidden;
      this.cardID = cID;
    }

    getTestAttrValue() {
      if (this.cardHidden) {
        return("Card");
      } else {
        return("Card-flipped");
      }
    }
  }