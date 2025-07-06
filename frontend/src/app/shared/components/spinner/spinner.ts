import { Component, computed } from '@angular/core';
import { SpinnerService } from '../../../core/services/spinner';

@Component({
  selector: 'app-spinner',
  standalone: false,
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss'
})
export class Spinner {
  constructor(public spinnerService: SpinnerService) {
    console.log(this.spinnerService.isLoading());
  }
}
