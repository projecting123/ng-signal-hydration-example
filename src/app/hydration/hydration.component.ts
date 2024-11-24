import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydration',
  imports: [],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.css'
})
export class HydrationComponent {
  serverTime = 'Sent from server';
  clientTime!: string
  platformId = inject(PLATFORM_ID)
  constructor(){
    this.clientTime = ''
  }

  ngOnInit(): void {
    // if(isPlatformBrowser(this.platformId)){
    //   this.serverTime = new Date().toISOString()
    // }
  }
}
