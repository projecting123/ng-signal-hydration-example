import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HydrationComponent } from './hydration/hydration.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'hydration', component: HydrationComponent},
    {path: 'signal', component: SignalComponent}
];
