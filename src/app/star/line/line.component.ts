import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StarService } from '../star.service';

@Component({
	selector: 'app-line',
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
	private id: string;

	public line: Observable<any>;
	public timetable: Observable<any[]>;

	constructor(
		private api: StarService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params) => {
			if (params.id) {
				this.id = params.id;

				this.line = this.api.getBusLine(params.id);
				this.timetable = this.api.getBusLineTimetable(params.id);

				this.getTimetable();
			}
		})
	}

	public getTimetable () {
		this.timetable = this.api.getBusLineTimetable(this.id);
	}
}
