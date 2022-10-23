import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArcadeComponent } from './components/arcade/arcade.component';
import { ShopComponent } from './components/shop/shop.component';
import { LedgerComponent } from './components/ledger/ledger.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: "",
    component: ArcadeComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "ledger",
    component: LedgerComponent
  }
];

@NgModule({
  declarations: [ // all the components
    AppComponent,
    ArcadeComponent,
    ShopComponent,
    LedgerComponent,
    HeaderComponent
  ],
  imports: [ // other modules
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
