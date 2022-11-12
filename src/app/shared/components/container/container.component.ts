import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../../interfaces/author.interface';
import { CrudService } from '../../services/crud.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  public title: string = 'Portafolios de Mario Cabrero Volarich - CartagoNova';

  constructor(
    private _storageSvc: StorageService,
    private _crudSvc: CrudService
  ) {}

  ngOnInit(): void {
    this._showInitConsoleMessage();

    this._crudSvc.getAll('authors').subscribe({
      next: (resp: any) => {
        console.log(resp);
        // this._storageSvc.authors = (resp as IAuthor[]);
        this._storageSvc.authors = resp.authors as IAuthor[];
      },
      error: (err) => {
        console.error(
          'Se ha producido un error al recuperar los autores de la base de datos',
          err
        );
      },
      complete: () => {
        console.log('Se han recuperado los autores de la base de datos.');
      },
    });
  }

  private _showInitConsoleMessage() {
    console.group('%c Info - Web owner','color: #bada55');
    console.log('Web owner: ' + this._storageSvc.webOwner.completeName());
    console.log('Nickname: ' + this._storageSvc.webOwner.completeNick());
    console.log('Email: ' + this._storageSvc.links.email);
    console.log('Github: ' + this._storageSvc.links.github);
    console.log('LinkedIn: ' + this._storageSvc.links.linkedin);
    console.groupEnd();
  }
}
