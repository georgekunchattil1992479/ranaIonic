import { Injectable } from '@angular/core';

//importing HttpClient module
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  //fetch only single Activity in the application
  getActivity(activityID: string) {
    return this._httpClient.get(API + "/id/"+ activityID); //fetching data from API based on activityID provided by user
  }

  //fetch AllActivity avaliable in the application
  getAllActivity() {
    return this._httpClient.get(API); //fetching data from API
  }
  
}

//OrangeValley APIs
const API ="https://orangevalleycaa.org/api/videos";
