import { Injectable } from '@angular/core';

//importing HttpClient module
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  //fetch only single Activity in the application
  getActivity(activityID: string) : Observable<Activity> { //for activity method, it return with Observablle data type
    return this._httpClient.get<Activity>(API + "/id/"+ activityID); //fetching data from API based on activityID provided by user
  }

  //fetch AllActivity avaliable in the application
  getAllActivities(): Observable<Activity[]>{ //for activity method, it return with Observablle data type
    return this._httpClient.get<Activity[]>(API); //fetching data from API
  }
  
}

//OrangeValley APIs
const API ="https://orangevalleycaa.org/api/videos";
