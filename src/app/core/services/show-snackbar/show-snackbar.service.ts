import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShowSnackbarService {
  constructor(public snackBar: MatSnackBar) {}

  showError(msj: string, timeout?: number) {
    timeout = timeout ? timeout : 5000;
    this.snackBar.open(msj, '×', {
      panelClass: ['error'],
      verticalPosition: 'top',
      duration: timeout,
    });
  }

  showSucces(msj: string, timeout?: number) {
    timeout = timeout ? timeout : 5000;
    this.snackBar.open(msj, '×', {
      panelClass: ['succes'],
      verticalPosition: 'top',
      duration: timeout,
    });
  }

  showInfo(msj: string, secundary?: string, timeout?: number) {}
}
