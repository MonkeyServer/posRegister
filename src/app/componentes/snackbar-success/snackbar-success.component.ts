import { Component,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-success',
  templateUrl: './snackbar-success.component.html',
  styleUrls: ['./snackbar-success.component.css']
})
export class SnackbarSuccessComponent {
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }

}
