import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackbarService: MatSnackBar) {}

  notify(message: string) {
    this.snackbarService.open(message, 'Okay', { duration: 1750 })
  };
}
