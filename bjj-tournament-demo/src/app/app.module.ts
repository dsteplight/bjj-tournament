import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy.component';
import { OneTournamentService } from './one-tournament.service';

export const firebaseConfig = {
   apiKey: "AIzaSyBWr7gdIZN0jmS50cyGuKs-erbk69gyfio",
   authDomain: "torneio-bjj.firebaseapp.com",
   databaseURL: "https://torneio-bjj.firebaseio.com",
   storageBucket: "torneio-bjj.appspot.com",
   messagingSenderId: "638300069846"
};

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [{provide: 'onetournament', useClass:OneTournamentService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
