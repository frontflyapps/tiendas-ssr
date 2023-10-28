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
export class LostConexionComponent implements OnInit {
  apiUrl = environment.apiUrl;

  constructor() {} // private router: Router // private showToastrService: ShowToastrService, // private utilsService: UtilsService, // private previousRouteService: PreviousRouteService, // private httpClient: HttpClient,

  ngOnInit() {
    // const interVal = setInterval(()=>{
    //   this.httpClient.get(environment.apiUrl+'uptime').subscribe(()=>{
    //     clearInterval(interVal);
    //     this.showToastrService.showInfo("Recuperando la conexión a internet","Conexón recuperada");
    //     this.router.navigate(['/']);
    //   });
    // },5000);
  }
}
