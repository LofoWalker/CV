import { Component } from '@angular/core';
import {faPhone, faMailBulk, faAddressBook, faBirthdayCake, faDownload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPhone = faPhone;
  faMail = faMailBulk;
  faAddress = faAddressBook;
  faBirth = faBirthdayCake;
  faDownload = faDownload;

  title = 'CV';

  download() {
    console.log('Clicked');
  }
}
