export class Client {
  
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    
  }
  
  export class Room {
    
    id: number;
    room_name: string;
    createdAt: Date;
    updatedAt: Date;
    
  }
  
  export class Booking {
      
    id: number;
    client_id: number;
    room_id: number;
    arrival_date: Date;
    departure_date: Date;
    createdAt: Date;
    updatedAt: Date;
    
  }