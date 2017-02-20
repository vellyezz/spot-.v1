import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'playlists-detail',
  template: `
      <div class="card">
  <div class="card-block"> 
      <h4 class="card-title">Playlista "{{playlist.name}}"</h4>
    <p class="card-text">Wybrana playlista</p>
    <div class="form-group row">
        <button class="btn btn-default float-xs-rigth" (click)="edit(playlist)">Edit</button>
      </div>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistsDetailComponent implements OnInit {



  @Input()
  playlist;


  @Output('editplaylist')
  emiter = new EventEmitter();

  edit(playlist){
    this.emiter.emit(playlist)
  }


constructor() { }

  ngOnInit() {
  }

}
