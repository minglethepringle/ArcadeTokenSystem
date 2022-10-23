import { Component, OnInit } from '@angular/core';
import { LedgerService, Transaction } from 'src/app/services/ledger/ledger.service';

/**
 * Represents the ledger page, where the user can view their transaction history.
 */
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html'
})
export class LedgerComponent {

  /**
   * The ledger transaction history.
   */
  protected ledger: Transaction[];

  /**
   * Constructs a new LedgerComponent.
   * @param ledgerService Injected ledger service
   */
  constructor(private ledgerService: LedgerService) {
    this.ledger = ledgerService.getTransactions();
  }

}
