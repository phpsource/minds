import { Component, View, NgFor, NgIf, CSSClass, Observable, formDirectives} from 'angular2/angular2';
import { RouterLink } from "angular2/router";
import { MessengerConversation } from "./messenger-conversation";
import { MessengerSetup } from "./messenger-setup";

import { Client } from 'src/services/api';
import { SessionFactory } from 'src/services/session';
import { Material } from 'src/directives/material';

@Component({
  selector: 'minds-gatherings',
  viewInjector: [ Client ]
})
@View({
  templateUrl: 'templates/plugins/gatherings/gatherings.html',
  directives: [ NgFor, NgIf, CSSClass, Material, RouterLink, MessengerConversation, MessengerSetup]
})

export class Gatherings {
  activity : any;
  session = SessionFactory.build();
  setup : boolean = false;

	constructor(public client: Client){
	}

}
