/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {}
