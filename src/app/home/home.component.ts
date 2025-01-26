import { Component } from '@angular/core';
import { ClientsComponent } from '../components/clients/clients.component';


@Component({
  selector: 'app-home',
  imports: [ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
