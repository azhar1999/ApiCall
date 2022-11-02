import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiDatas } from './interfaces';


@Injectable()
export class ServiceTestService {

  constructor(private httpClient:HttpClient ) {

   }

  getApi(): Observable<apiDatas[]> {
    return this.httpClient.get<apiDatas[]>('https://jsonplaceholder.typicode.com/posts');
  }

  postApi(data:apiDatas):Observable<apiDatas[]>{
    return this.httpClient.post<apiDatas[]>('https://jsonplaceholder.typicode.com/posts',data);
  }

  deleteApi(data:number):Observable<number>{

    return this.httpClient.delete<number>(`https://jsonplaceholder.typicode.com/posts/${data}`);
  }
}
