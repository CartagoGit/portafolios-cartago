import { TSocialPosition } from '../../interfaces/position.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  @Input('position') position!: TSocialPosition;

  constructor() {
   
  }
}
