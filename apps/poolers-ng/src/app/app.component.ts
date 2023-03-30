import { Component, OnInit } from '@angular/core';
import { teamInterface } from '@mistertech-mono/team-interface';

@Component({
  selector: 'mistertech-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poolers-ng';

  ngOnInit(): void {
    const test = teamInterface();
    console.log(test);
  }
}
