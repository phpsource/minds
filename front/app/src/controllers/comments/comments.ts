import { Component, View, NgFor, NgIf, NgClass, FORM_DIRECTIVES, Observable} from 'angular2/angular2';
import { RouterLink } from "angular2/router";
import { Client } from 'src/services/api';
import { SessionFactory } from 'src/services/session';
import { Material } from 'src/directives/material';
import { InfiniteScroll } from 'src/directives/infinite-scroll';
import { TagsPipe } from 'src/pipes/tags';
import { TagsLinks } from 'src/directives/tags';

@Component({
  selector: 'minds-comments',
  viewBindings: [ Client ],
  inputs: ['_object : object', '_reversed : reversed']
})
@View({
  templateUrl: 'templates/comments/list.html',
  directives: [ NgFor, NgIf, NgClass, Material, RouterLink, InfiniteScroll, FORM_DIRECTIVES, TagsLinks ],
  pipes: [ TagsPipe ]
})

export class Comments {

  minds;
  object;
  guid: string = "";
  comments : Array<any> = [];
  postMeta : any = {};
  reversed : boolean = false;
  session = SessionFactory.build();

  offset : string = "";
  inProgress : boolean = false;
  moreData : boolean = true;

	constructor(public client: Client){
    this.minds = window.Minds;
	}

  set _object(value: any) {
    this.object = value;
    this.guid = this.object.guid;
    if(this.object.entity_guid)
      this.guid = this.object.entity_guid;
    this.load();
  }

  set _reversed(value: boolean){
    if(value)
      this.reversed = true;
    else
      this.reversed = false;
  }

  load(refresh : boolean = false){
    var self = this;
    this.client.get('api/v1/comments/' + this.guid, { limit: 3, offset: this.offset, reversed: true })
      .then((response : any) => {
        if(!response.comments){
          self.moreData = false;
          self.inProgress = false;
          return false;
        }

        self.comments = response.comments.concat(self.comments);

        self.offset = response['load-previous'];
        if(!self.offset || self.offset == null)
          self.moreData = false;
        self.inProgress = false;
      })
      .catch((e) => {

      });
  }

  post(){
    var self = this;
    this.client.post('api/v1/comments/' + this.guid, { comment: this.postMeta.comment })
      .then((response : any) => {
        self.postMeta.comment = "";
        self.comments.push(response.comment);
      })
      .catch((e) => {

      });
  }

}
