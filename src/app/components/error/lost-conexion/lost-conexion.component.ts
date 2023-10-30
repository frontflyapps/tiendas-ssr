import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from 'environments/environment';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lost-conexion',
  templateUrl: './lost-conexion.component.html',
  styleUrls: ['./lost-conexion.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterLink],
})
export class LostConexionComponent {
  apiUrl = environment.apiUrl;

  constructor() {} // private router: Router // private showToastrService: ShowToastrService, // private utilsService: UtilsService, // private previousRouteService: PreviousRouteService, // private httpClient: HttpClient,
}
