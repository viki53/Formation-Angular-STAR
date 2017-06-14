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
	public query: string = '';

	constructor(
		private api: StarService
	) {
		this.lines = this.api.getBusLines();
	}

	ngOnInit() {

	}

	public search() {
		this.lines = this.api.getBusLines(this.query);
	}
}
