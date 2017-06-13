import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StarService } from '../star.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public lines: Observable<any[]>;

	constructor(
		private api: StarService
	) { }

	ngOnInit() {
		this.lines = this.api.getBusLines();
		this.lines.map((res) => {
			console.table(res);
		});
	}

}
