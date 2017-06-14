import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StarService } from '../star.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public loading: boolean;
	public lines: any[];
	public query: string = '';

	constructor(
		private api: StarService
	) {
		this.search();
	}

	ngOnInit() {

	}

	public search() {
		this.loading = true;
		this.api.getBusLines(this.query).subscribe((data) => {
			this.lines = data;
			this.loading = false;
		});
	}
}
