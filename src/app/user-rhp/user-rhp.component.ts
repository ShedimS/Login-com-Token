import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  
  id: string,
  email: string;
  senha: string
  
}

const ELEMENT_DATA: PeriodicElement[] = [


  {
    id:"0",
    email: "admin@adm.com",
    senha: "123",
   
  },
  {
    id:"1",
    email: "ricardo@adm.com",
    senha: "123",
   
  },
  {
    id:"2",
    email: "leo@adm.com",
    senha: "123",
   
  },
  {
    id:"3",
    email: "gustavo@adm.com",
    senha: "123",
   
  },
  {
    id:"4",
    email: "kaue@adm.com",
    senha: "123",
   
  },
  



];

/**
 * @title Styling columns using their auto-generated column names
 */


@Component({
  selector: 'app-user-rhp',
  templateUrl: './user-rhp.component.html',
  styleUrls: ['./user-rhp.component.scss']
})
export class UserRHPComponent implements OnInit {

  displayedColumns: string[] = ['demo-id','demo-position', 'demo-senha'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
