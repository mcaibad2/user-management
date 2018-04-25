import {Injectable} from '@angular/core';
import {HistoryItem} from '../model/historyItem';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HistoryService {
  historyItems: HistoryItem[] = [];

  constructor() {
    this.historyItems.push(new HistoryItem('TYext', new Date()));
  }

  create(historyItem: HistoryItem) {
    this.historyItems.push(historyItem);
  }

  read(): Observable<HistoryItem[]> {
    return of(this.historyItems);
  }

  clear() {
    this.historyItems = [];
  }
}
