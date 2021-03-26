import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { PassengerDashboardService} from '../../passenger-dashboard.service'

import { Passenger } from '../../models/passenger.interface'





@Component({
  selector: 'passenger-dashboard',
  styleUrls:['passenger-dashboard.component.scss'],
  template:`

  <div>
    <passenger-count
    [items]="passengers">
    >
    </passenger-count>

    <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (view)="handleView($event)"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)">
    </passenger-detail>

     
  <!--
      <ul>
         <li *ngFor="let passenger of passengers; let i = index;" >
           <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-in': !passenger.checkedIn
            }"></span>
               {{ i }}: {{ passenger.fullname }}
        </li>
     </ul>
  -->
</div>
  
  `
})
export class PassengerDashboardComponent implements OnInit{
 
  passengers: Passenger[];
  constructor(
    private router:Router,  
    private passengerService: PassengerDashboardService) {}
  
    ngOnInit() {

    console.log('ngOnInit')
     this.passengerService
     .getPassengers()
     .subscribe((data: Passenger[]) =>{
       console.log('Respuesta',data)
       this.passengers = data;
     });
 }
 
 handleEdit(event: Passenger){
   this.passengerService
   .updatePassenger(event)
   .subscribe((data: Passenger)=> {
     this.passengers = this.passengers.map((passenger: Passenger) => {
     if (passenger.id === event.id){
       passenger = Object.assign({}, passenger, event)
     }
     return passenger;
    });

   })

 }
 handleRemove(event: Passenger){
   this.passengerService
   .removePassenger(event)
   .subscribe((data: Passenger)=>{
     this.passengers = this.passengers.filter((passenger: Passenger) => {
     return passenger.id !== event.id;

   });

   })
   
   
 }
 handleView(event: Passenger){
  this.router.navigate(['/passengers', event.id])

 }
}











/*

<!-- html 
 <h1 [innerHTML]="title"></h1>
    {{ numberOne - numberTwo }}
    {{isHappy ? ":)" : ":("}}
    <img [src]="logo">
  </div>
  <div>
    <button (click)="handleClick()">
    change name
    </button>
   <input
    type="text" 
    [ngModel]="name"
    (ngModelChange)="handleChange($event)"
    
    >
    este input modifica el valor del otro en tiempo real 
    y hace lo mismo que el de arriba, con menos codigo
    <input
    type="text" 
    [(ngModel)]="name"
    
    >
    <button (click)="handleClick(userlastname.value)">
    get value
    </button>
    <input
    type="text" #userlastname>
    
    <input
     type="text"
     [value]="name"
     (input)="handleChange($event.target.value)">
    
    <template [ngIf]="name.length > 3"  >

    <div > 
     searching for ...{{ name }} 
    </div>
    
    </template>

    <div *ngIf="name.length > 2" > 
     searching for ...{{ name }} 
    </div>-->

    //js

  title : string;
  name: string = "";
  handleClick(value: string){
    console.log(value)
  }

   handleChange(value: string){
    this.name = value
  }




//cambio el nombre desde el botton
 // handleClick(){
   // this.name = "edgar"
  //}
  //obtengo el valor del input
 


  numberOne: number = 3;
  numberTwo: number = 4;
  isHappy: boolean = false;
  logo: string = "img/ed.png";
  constructor() {
    this.title = "ultime angular  "
  }

*/


 
     



