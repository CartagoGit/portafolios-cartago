import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * ? Metodo para subir el scroll del container arriba
   */
  public clickToUp = (): void => {
    const page = document.querySelector('#container>:last-child');
    console.log(page);
    if (page !== null)
      page.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}
