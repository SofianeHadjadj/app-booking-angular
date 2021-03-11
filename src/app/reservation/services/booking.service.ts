import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class BookingService {

  env: any;

  constructor(private http: HttpClient) { 
    this.env = environment;
  }

  // reservation(client_id, room_id, departure_date, arrival_date) {
  //   const uri = 'http://' + this.env.SERVER_ADDR + ':' + this.env.BOOKING_PORT + '/v1/writebooking';
  //   const obj = {
  //     client_id: client_id,
  //     room_id: room_id,
  //     arrival_date: arrival_date,
  //     departure_date: departure_date
  //   };
  //   this.http.post(uri, obj)
  //       .subscribe(res => console.log(uri, obj));
  // }

  // reservation(booking) {
  //   console.log(JSON.stringify(booking));
  // }

  reservation(booking) {
    const uri = 'http://' + this.env.SERVER_ADDR + ':' + this.env.BOOKING_PORT + '/v1/writebooking';
    this.http.post(uri, booking)
        .subscribe(res => console.log(uri, booking));
  }

}
