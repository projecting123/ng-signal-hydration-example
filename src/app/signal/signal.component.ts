import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  counter:WritableSignal<number> = signal(0)
  computedValue = computed(() => this.counter() * 2)
  increment(){
    this.counter.update(prev => prev + 1)
  }
}
