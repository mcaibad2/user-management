import {Component, OnInit} from '@angular/core';
import {HistoryItem} from '../../model/historyItem';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems: HistoryItem[];

  constructor(private historyService: HistoryService) {
  }

  ngOnInit() {
    this.getHistoryItems();
  }

  getHistoryItems(): void {
    this.historyService.getHistoryItems().subscribe(historyItems => this.historyItems = historyItems);
  }
}
