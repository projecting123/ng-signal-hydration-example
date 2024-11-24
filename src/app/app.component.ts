import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputsComponent } from "./inputs/inputs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  modelValueFromParent = 0
}
