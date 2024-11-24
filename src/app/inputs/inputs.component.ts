import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  modelInputvalue = model(0)
  incrementModelInputValue(){
    this.modelInputvalue.update(prev => prev + 1);
  }
}