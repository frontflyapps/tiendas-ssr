import { PreviousRouteService } from '../../../core/services/previous-route/previous-route.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UtilsService } from './../../../core/services/utils/utils.service';
import { ShowToastrService } from './../../../core/services/show-toastr/show-toastr.service';
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
