import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip'

interface tipoDoc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {
  tiposDoc: tipoDoc[] = [
    {value: '1', viewValue: 'Cedula Ciudadania'},
    {value: '2', viewValue: 'Tarjeta Identidad'},
    {value: '3', viewValue: 'Cedula Extranjera'},
  ];
  hrAttrib = {
      "hr_id":"green",
      "hr_td":"white",
      "hr_pn":"white",
      "hr_sn":"white",
      "hr_pa":"white",
      "hr_sa":"white",
      "hr_di":"white",
      "hr_em":"red",
      "hr_ci":"white",
      "hr_de":"white",
      "hr_rg":"white",
      "hr_rt":"white"
  };

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
