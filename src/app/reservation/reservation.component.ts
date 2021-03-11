import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, Room, Booking } from './db-structure';
import { environment } from '../../environments/environment';
import { BookingService } from './services/booking.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {

  env: any;

  today: number = Date.now();

  goodformatdate: any;

  all_room : Array<Room> = new Array; 
  current_room: Room = new Room; 
  room_list : Array<Room> = new Array;

  all_client : Array<Client> = new Array; 
  current_client: Client = new Client; 
  client_list : Array<Client> = new Array;

  constructor(private http:HttpClient, private bookingservice: BookingService, public datepipe: DatePipe,private formBuilder: FormBuilder) {
    this.env = environment;
  } 

  bookingForm = this.formBuilder.group({
    client_id : '',
    room_id : '',
    arrival_date : '',
    departure_date : ''
  });

  ngOnInit() {

  this.goodformatdate = this.datepipe.transform(this.today, 'yyyy-MM-dd hh:mm:ss');

    console.log(this.goodformatdate);

      this.http.get('http://' + this.env.SERVER_ADDR + ':' + this.env.BOOKING_PORT + '/v1/rooms').subscribe(data => {
      
      // Insertion des rooms dans la card_list
      for (let key in data)
      {
        this.current_room = new Room;
        if (this.find_room_in_list(data[key].id) == 0)
        {
          this.current_room.id = data[key].id;
          this.current_room.room_name = data[key].room_name;

          this.all_room.push(this.current_room);
        }
      }
      
      console.log(this.all_room);
    });

    this.http.get('http://' + this.env.SERVER_ADDR + ':' + this.env.BOOKING_PORT + '/v1/clients').subscribe(data => {
      
      // Insertion des clients dans la card_list
      for (let key in data)
      {
        this.current_client = new Client;
        if (this.find_client_in_list(data[key].id) == 0)
        {
          this.current_client.id = data[key].id;
          this.current_client.first_name = data[key].first_name;
          this.current_client.last_name = data[key].last_name;

          this.all_client.push(this.current_client);
        }
      }
      
      console.log(this.all_client);
    });

  }

  // ROOM FUNCTIONS

  find_room_in_list(id) {
    
    for (let key in this.all_room)
    {
      if (this.all_room[key].id == id)
      {
        return 1;
      }
    }
    return 0;
  }

  delete_room_from_list(room)
  {
    for (let key in this.room_list)
     {
      if (this.room_list[key] == room)
      {
        delete this.room_list[key];
      }
     }
  }

  append_list_room(room) {
    
    if (this.find_room_in_list(room)) {
       this.delete_room_from_list(room);
    }
    else {
      this.room_list.push(room);
    }
    console.log(this.room_list);
    
  }

  // END ROOM FUNCTION

  // CLIENT FUNCTIONS


  find_client_in_list(id) {
    
    for (let key in this.all_client)
    {
      if (this.all_client[key].id == id)
      {
        return 1;
      }
    }
    return 0;
  }

  delete_client_from_list(client)
  {
    for (let key in this.client_list)
     {
      if (this.client_list[key] == client)
      {
        delete this.client_list[key];
      }
     }
  }

  append_list_client(client) {
    
    if (this.find_client_in_list(client)) {
       this.delete_client_from_list(client);
    }
    else {
      this.client_list.push(client);
    }
    console.log(this.client_list);
    
  }

  // END CLIENT FUNCTIONS

    onSubmit() {
    }

    onReset() {
    }

  // FONCTION DE BOOKING FINALE

  // reservation(client_id, room_id, departure_date, arrival_date) {
  //   this.bookingservice.reservation(client_id, room_id,this.datepipe.transform(arrival_date, 'yyyy-MM-dd hh:mm:ss'),this.datepipe.transform(departure_date, 'yyyy-MM-dd hh:mm:ss'));
  // } 

  onFormSubmit() {
    this.bookingservice.reservation(this.bookingForm.value);
    this.bookingForm.reset();
  }

}