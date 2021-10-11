import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    log(message) : void {
        console.log(message);
    }
}