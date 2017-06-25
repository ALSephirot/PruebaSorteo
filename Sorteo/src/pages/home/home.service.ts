import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HomeService {
    static get parameters() {
        return [[Http]];
    }


    constructor(private http:Http) {
         
    }

    public getUsers(){
        return new Promise((resolve, reject)=>{
            var url = "../assets/data/data.json";


            this.http.get(url).map(res => res.json()).subscribe((data) => {
                resolve(data);
            },error => {
                reject(error);
            });
        })
    }
}