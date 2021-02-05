// import { Injectable, NgZone } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';


// @Injectable({
//   providedIn: 'root'
// })
// export class CustomSnackbarService {

//   constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

//   openSnackBar(message: string, action: string) {
//     this.snackBar.open(message, action, {
//       duration: 100000,
//     });
//   }

//   public open(message, action = 'success', duration = 50000) {
//     this.zone.run(() => {
//         this.snackBar.open(message, action, { duration });
//     });

// }
// }


import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
} from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '1500';

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = 'custom-snackbar';
    this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
}

}
