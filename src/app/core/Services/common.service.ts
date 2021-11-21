import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { MatSnackBar } from '@angular/material';

@Injectable()
export class CommonService {
  public APIUrl = 'http://muhannad-alsamer.com/WebAPI/api/Data';
  public ticket = '';
  Is_Logged_In = new BehaviorSubject<boolean>(false);
  UI_Direction = new BehaviorSubject<string>('ltr');
  //AZURE_BLOB_IMAGES_CONTAINER =  "";
  //constructor(private snackBar: MatSnackBar) { }
  constructor() { }

  ShowMessage(message: string, d: number = 1000) {
    //this.snackBar.open(message, '', {duration: d});
	alert(message);
  }

  Handle_Exception(msg) {
    if ((msg != null) && (msg !== '')) {
      this.ShowMessage(msg , 3000);
    }
  }
}
