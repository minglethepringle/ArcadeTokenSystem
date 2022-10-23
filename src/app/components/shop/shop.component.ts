import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/GlobalVariables';
import { ArcadeService } from 'src/app/services/arcade/arcade.service';

/**
 * Represents the shop page, where the user can purchase tokens.
 */
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent {

  /**
   * The current cost of a token, in USD.
   */
  protected tokenCost: number = GlobalVariables.TOKEN_COST;

  /**
   * The number of tokens the user wants to buy. This is a string because it is bound to an input field.
   */
  protected tokensToBuy: string = "";

  /**
   * The arcade service used to add tokens to the user's account.
   */
  protected arcadeService: ArcadeService;

  /**
   * Constructs a new ShopComponent.
   * @param arcade Injected arcade service
   */
  constructor(private arcade: ArcadeService) {
    this.arcadeService = arcade;
  }

  /**
   * Purchases `tokensToBuy` tokens for the user.
   * Parses out invalid inputs, which are any empty, non-integer, and non-positive inputs.
   */
  buyTokens() {
    if (this.tokensToBuy == "") {
      alert("Please enter the number of tokens you want to buy.");
      return;
    }

    let tokensToBuy = parseInt(this.tokensToBuy);
    if (isNaN(tokensToBuy) || tokensToBuy <= 0) {
      alert("Please enter a valid number of tokens to buy.");
      return;
    }

    this.arcadeService.addTokens(tokensToBuy);

    alert("Bought " + tokensToBuy + " tokens for $" + (tokensToBuy * this.tokenCost).toFixed(2) + "!");
  }

}
