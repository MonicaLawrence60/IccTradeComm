import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class FinanceRequestServices {
  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://mock.com"; }

    getFinancierBidding(params : any){
        return this.apiService.get('invoiceRequestSave', params);
    }

}