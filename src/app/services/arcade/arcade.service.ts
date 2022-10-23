import { Injectable } from '@angular/core';
import { GlobalVariables } from 'src/app/GlobalVariables';
import { LedgerService } from '../ledger/ledger.service';

/**
 * Represents the controller for arcade operations, like
 * buying tokens and playing games. Uses the LedgerService under the hood.
 */
@Injectable({
  providedIn: 'root'
})
export class ArcadeService {
  /**
   * The ledger service used to keep track of transactions.
   */
  private ledgerService: LedgerService;

  /**
   * Constructs a new ArcadeService.
   * @param ledger The ledger service used to keep track of transactions
   */
  constructor(private ledger: LedgerService) {
    this.ledgerService = ledger;
  }

  /**
   * Calculates the number of tokens from the ledger.
   * @returns The number of tokens the user has
   */
  getTokens(): number {
    let numTokens = 0;
    let transactions = this.ledgerService.getTransactions();
    for (let transaction of transactions) {
      if (transaction.bought) {
        numTokens += transaction.numTokens;
      } else {
        numTokens -= transaction.numTokens;
      }
    }
    return numTokens;
  }

  /**
   * Buys tokens and adds it to the ledger.
   * @param numTokens The number of tokens bought
   */
  addTokens(numTokens: number): void {
    let cost = (numTokens * GlobalVariables.TOKEN_COST).toFixed(2);
    this.ledgerService.addTokenTransaction(true, numTokens, "Card Refill, Cost = $" + cost);
  }

  /**
   * Plays a game, spends tokens, and adds it to the ledger.
   * @param gameName The name of the game played
   * @param cost The cost of the game in tokens
   * @throws Error if the user does not have enough tokens
   */
  playGame(gameName: string, cost: number): void {
    if (this.getTokens() >= cost) {
      this.ledgerService.addTokenTransaction(false, cost, gameName);
    } else {
      throw "Not enough tokens to play " + gameName;
    }
  }
}
