import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { interval } from "rxjs";

class PicklesResponse {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class PicklesService {

  private dataEmitter: EventEmitter<PicklesResponse> = new EventEmitter<PicklesResponse>();

  constructor(private _httpClient: HttpClient) {
    this.getData();
    interval(environment.picklesConfig.refreshInterval).subscribe(() => this.getData());
  }

  getData() {
    this._httpClient.get<PicklesResponse>(`${environment.picklesConfig.url}/data`, {
      headers: {"x-api-key": environment.picklesConfig.apikey}
    }).subscribe(({data}) => this.dataEmitter.emit(data));
  }

  getDataEmitter() {
    return this.dataEmitter;
  }
}
