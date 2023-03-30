import { Component, OnInit } from '@angular/core';
import { testLibrary } from '@mistertech/test-library';

@Component({
  selector: 'mistertech-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poolers-ng';

  ngOnInit(): void {
    const test = testLibrary();
    console.log({ testLib: test });
  }
}
