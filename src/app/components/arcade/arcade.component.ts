import { Component, OnInit } from '@angular/core';
import { ArcadeService } from 'src/app/services/arcade/arcade.service';
import { GlobalVariables } from '../../GlobalVariables';

/**
 * Represents the arcade / home page, where the user can play games.
 */
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html'
})
export class ArcadeComponent {

  /**
   * The list of games that the user can play.
   */
  protected listGames = GlobalVariables.GAMES;

  /**
   * The number of tokens the user has - calculated from the ledger.
   */
  protected numTokens: number = 0;
  
  /**
   * Constructs a new ArcadeComponent.
   * @param arcadeService Injected arcade service
   */
  constructor(private arcadeService: ArcadeService) { 
    this.numTokens = this.arcadeService.getTokens();
  }

  /**
   * Plays an arcade game.
   * @param gameName The name of the game played
   * @param cost The cost of the game in tokens
   */
  playGame(gameName: string, cost: number): void {
    try {
      this.arcadeService.playGame(gameName, cost);
      alert("Played " + gameName + "!");
    } catch (error) {
      alert(error);
    }
    
    this.numTokens = this.arcadeService.getTokens();
  }
}
