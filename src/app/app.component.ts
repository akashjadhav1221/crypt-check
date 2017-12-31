import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => this.data = data);
  }

}
