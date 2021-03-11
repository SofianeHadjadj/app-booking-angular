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

  reservation(id_user, id_room, departure_date, arrival_date) {
    const uri = 'http://' + this.env.SERVER_ADDR + ':' + this.env.BOOKING_PORT + '/v1/booking';
    const obj = {
      id_user: id_user,
      id_room: id_room,
      arrival_date: arrival_date,
      departure_date: departure_date
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log(uri, obj));
  }

}
