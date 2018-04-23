import {Injectable} from '@angular/core';
import {HistoryItem} from '../model/historyItem';
import {HISTORY_ITEMS} from '../mock-data/mock-historyItems';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HistoryService {

  constructor() {
  }

  getHistoryItems(): Observable<HistoryItem[]> {
    return of(HISTORY_ITEMS);
  }
}
