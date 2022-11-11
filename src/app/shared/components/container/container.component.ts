import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../../interfaces/author.interface';
import { BasicCrudService } from '../../services/basic-crud.service';
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
    private _crudSvc: BasicCrudService
  ) {}

  ngOnInit(): void {
    this._crudSvc.getAll('authors').subscribe({
      next: (resp: any) => {
        console.log(resp);
        // this._storageSvc.authors = (resp as IAuthor[]);
        this._storageSvc.authors = resp.authors as IAuthor[];
      },
    });
  }
}
