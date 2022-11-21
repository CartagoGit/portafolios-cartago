import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  /**
   * ? Transicion del toast
   */
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          visibility: 'hidden',
          right: '-400px',
        })
      ),
      state('open', style({ right: '40px' })),
      transition('open <=> closed', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  private _progressInterval!: NodeJS.Timer;

  //ANCHOR - Constructor
  constructor(public toastSvc: ToastService) {
    this.toastSvc.open.subscribe((data) => {
      if (data.show) {
        this.countDown();
      }
    });
  }

  ngOnInit(): void {}

  /**
   * ? Comenzar el contador del toast
   */
  public countDown(): void {
    this.progressBar.nativeElement.style.width =
      this.toastSvc.data.progressWidth;

    this._progressInterval = setInterval(() => {
      const width = parseInt(this.progressBar.nativeElement.style.width, 10);
      console.log(width);
      if (width <= 0) {
        this.toastSvc.hide();
        clearInterval(this._progressInterval);
        return;
      }

      this.toastSvc.data.progressWidth = String(width - 1);
      this.progressBar.nativeElement.style.width =
        this.toastSvc.data.progressWidth + '%';
    }, 100);
  }

  /**
   * ? Parar el contador del Toast
   */
  public stopCountDown(): void {
    clearInterval(this._progressInterval);
  }
}
