import { GameCard } from '../_models/index';

export class GameModel{
    gameScore: number = 0;
    gameReady: boolean = false;
    unsolvedPairs: number = 9;
    openCardNum: number = 0;
    openCardFirst: GameCard;
    openCardSecond: GameCard;
    gameStarted: boolean = false;
    gameFinished: boolean = false;
  }