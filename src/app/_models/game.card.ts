export class GameCard{
    cardValue: string;
    cardImg: string;
    cardHidden: boolean;
    cardID: string;
    isSolved: boolean = false;
    testID: string;

    constructor(cVal: string, cImg: string, cHidden: boolean, cID: string, tid: string) {
      this.cardValue = cVal;
      this.cardImg = cImg;
      this.cardHidden = cHidden;
      this.cardID = cID;
      this.testID = tid;
    }

    getTestAttrValue() {
      if (this.cardHidden) {
        return("Card-flipped");
      } else {
        return("Card");
      }
    }
  }