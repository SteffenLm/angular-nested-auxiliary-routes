import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'auxiliary-routes-center-test',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './center-test.component.html',
  styleUrls: ['./center-test.component.scss'],
})
export class CenterTestComponent {
  private leftOpen = false;
  private rightOpen = false;
  private readonly router = inject(Router);

  public onLeft() {
    if (!this.leftOpen) {
      this.router.navigate(['', { outlets: { left: 'left' } }], {
        skipLocationChange: true,
      });
    } else {
      this.router.navigate(['', { outlets: { left: null } }], {
        skipLocationChange: true,
      });
    }
    this.leftOpen = !this.leftOpen;
  }

  public onRight() {
    if (!this.rightOpen) {
      this.router.navigate(['', { outlets: { right: 'right' } }], {
        skipLocationChange: true,
      });
    } else {
      this.router.navigate(['', { outlets: { right: null } }], {
        skipLocationChange: true,
      });
    }
    this.rightOpen = !this.rightOpen;
  }

  onGoToOne() {
    this.router.navigate(['one']);
  }
  onGoToTwo() {
    this.router.navigate(['two']);
  }
}
