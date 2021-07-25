import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <ul>
      <li *ngFor="let photo of photos">
        <p>{{ photo.title }}</p>
        <span [hidden]="photo.hidden">
          <button (click)="photo.hidden = true">Hide</button>
        </span>
        <span [hidden]="!photo.hidden">
          <button (click)="photo.hidden = false">Hide</button>
        </span>
        <div [hidden]="photo.hidden">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
        </div>
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() photos;
}
