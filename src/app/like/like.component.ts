import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() isActive: boolean = false;
  @Input() likesCount: number = 0;

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
  }
}
