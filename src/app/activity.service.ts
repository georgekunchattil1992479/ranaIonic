import { Injectable } from '@angular/core';

//importing HttpClient module
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  //fetch only single Activity in the application
  getActivity() {

  }

  //fetch AllActivity avaliable in the application
  getAllActivity() {
    
  }
  
}

//OrangeValley APIs
const API ="https://orangevalleycaa.org/api/videos";
