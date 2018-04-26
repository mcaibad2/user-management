import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigurationService {

  private configUrl = 'assets/config.json';
  private configuration: Object;

  constructor(private http: HttpClient) {
    this.getConfiguration();
  }

  getConfiguration() {
    return this.http.get(this.configUrl).subscribe(data => {
      this.configuration = data;
    });
  }

  public getConfigurationKey(key: any) {
    return this.configuration[key];
  }
}
