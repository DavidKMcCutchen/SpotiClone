import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackbarService: MatSnackBar) {}


  // Included this because it's just such a low effort addition and who knows I may use it in the future.

  notify(message: string) {
    this.snackbarService.open(message, 'Okay', { duration: 1750 })
  };
}
