export interface Passenger {

  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number;
  children?: Child[] 


}

export interface Child {
  name: string,
  age: number;
}