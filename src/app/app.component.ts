import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent, FooterComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eaccord';
}
