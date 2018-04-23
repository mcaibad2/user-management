import { Component, OnInit } from '@angular/core';
import { HISTORY_ITEMS } from '../mock-historyItems';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems = HISTORY_ITEMS;

  constructor() {
  }

  ngOnInit() {
  }
}
