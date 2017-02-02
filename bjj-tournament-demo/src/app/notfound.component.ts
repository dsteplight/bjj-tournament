import { Component, Inject } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})

export class NotFoundComponent {
  title = 'notfound works!';
  items: FirebaseObjectObservable<any>;
  constructor(af: AngularFire, @Inject('onetournament') private onetournament){
    this.items = af.database.object('/tournaments/naga-newark-2017/brackets/0/fighters');
  }
}
