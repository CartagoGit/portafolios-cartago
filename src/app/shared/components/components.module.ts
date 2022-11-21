import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [SocialLinksComponent, ToastComponent],
  imports: [CommonModule],
  exports: [SocialLinksComponent, ToastComponent],
})
export class ComponentsModule {}
