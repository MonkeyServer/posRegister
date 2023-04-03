import { Component } from '@angular/core';
import { ParametrosService } from '../../services/parametros.service';
import {Principal} from '../../interfaces/iPrincipal';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends Principal {
  
  constructor(private parametrosService: ParametrosService){
    super(parametrosService,null);
    this.InicializarParametros();
  }

}
 