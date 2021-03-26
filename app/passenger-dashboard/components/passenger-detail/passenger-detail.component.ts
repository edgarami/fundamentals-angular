import { ChangeDetectorStatus } from '@angular/compiler/src/private_import_core';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
       <span 
        class="status"
         [class.checked-in]="detail.checkedIn"></span>
         <div *ngIf="editing" >
          <input type="text"
           [value]="detail.fullname"
           (input)="onNameChange(name.value)"
           #name>
         </div>
         <div *ngIf="!editing">
          {{ detail.fullname }}
         </div>
           <p> {{ detail | json }} </p>
           <div class="date" >
           check in date: 
           {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in '}}
           </div>
           <button (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit'  }}
           </button>
             <button (click)="onRemove()">
             Remove
           </button>
            <button (click)="goToPassenger()">
             View
           </button>
    </div>

  
  `



})
export class PassengerDetailComponent implements OnChanges, OnInit{

  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>()
  
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>()

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>()


  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes){
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
    console.log('ngOnChanges')

  }
  ngOnInit(){
    console.log('ngOnInit')
  }
  goToPassenger(){
    this.view.emit(this.detail)
  }


  onNameChange(value: string){
    console.log('Value', value)
    this.detail.fullname = value
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing
  }
  onRemove(){
    this.remove.emit(this.detail)

  }
  
 
}