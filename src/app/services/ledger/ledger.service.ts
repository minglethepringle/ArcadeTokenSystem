import { Injectable } from '@angular/core';

/**
 * Represents the controller for ledger operations.
 */
@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  /**
   * List of transaction objects, where each transaction object contains:
   * - bought: true if tokens were bought, false if tokens were spent
   * - numTokens: number of tokens bought or spent
   * - description: description of the transaction
   */
  private transactions: Transaction[] = [];

  constructor() { }

  /**
   * Returns the list of token transactions.
   * @returns A copy of the list of transactions
   */
  getTransactions(): Transaction[] {
    return [...this.transactions];
  }

  /**
   * Add a token transaction to the ledger.
   * @param type true if tokens were bought, false if tokens were spent
   * @param numTokens number of tokens bought or spent
   * @param description description of the transaction
   * @throws Error if numTokens is less than or equal to 0, or if description is empty
   */
  addTokenTransaction(bought: boolean, numTokens: number, description: string): void {
    if (numTokens <= 0 || description == "") {
      throw "Invalid token transaction";
    }

    this.transactions.push({
      "datetime": new Date().toLocaleString(),
      "bought": bought,
      "numTokens": numTokens,
      "description": description
    });
  }
}

/**
 * Represents a token transaction.
 * 
 * Note: I tried to put this in a global.d.ts file but Angular wouldn't compile :(
 */
export type Transaction = {
  datetime: string;
  bought: boolean;
  numTokens: number;
  description: string;
};