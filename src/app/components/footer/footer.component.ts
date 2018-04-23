import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  text = 'Powered by wappier ©2010-2018';

  constructor() {
  }

  ngOnInit() {
  }
}
