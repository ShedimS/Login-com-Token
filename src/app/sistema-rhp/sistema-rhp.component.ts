import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  
  cliente: string;
  plano: string
  velocidade: string
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [


  {cliente: "Edimundo",
  plano: "VMax force",
  velocidade: "300 mega",
  valor: "R$ 99,00"},
  {
    cliente: "Osvaldo",
    plano: "VMax lite",
    velocidade: "80 mega",
    valor: "R$ 40,00"
},
{
  cliente: "Ediomundo",
  plano: "VMax force",
  velocidade: "300 mega",
  valor: "R$ 99,00"
},
{
  cliente: "Clovis",
  plano: "VMax power",
  velocidade: "250 mega",
  valor: "R$ 100,00"
},
{
  cliente: "Geraldo",
  plano: "VMax lite",
  velocidade: "80 mega",
  valor: "R$ 40,00"
},



];




@Component({
  selector: 'app-sistema-rhp',
  templateUrl: './sistema-rhp.component.html',
  styleUrls: ['./sistema-rhp.component.scss']
})
export class SistemaRHPComponent implements OnInit {
  

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}