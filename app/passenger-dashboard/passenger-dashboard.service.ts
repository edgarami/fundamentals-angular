import { Passenger } from './models/passenger.interface'
 
export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
     return [{
    id: 1,
    fullname: "edgar",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name:'ted',age: 32,}, {name:'mark',age: 23,}]
  },
  {
   id: 2,
   fullname: "Rose",
   checkedIn: false,
   checkInDate: null,
   children: null
  },
   {
   id: 3,
   fullname: "james",
   checkedIn: true ,
   checkInDate:1370742000000,
   children: null
  },]

  }

}