import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarService } from '../star.service';

@Component({
	selector: 'app-line',
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
	private id: string;

	public line: any;
	public timetable: any[];

	constructor(
		private api: StarService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe((params) => {
			if (params.id) {
				this.id = params.id;

				this.api.getBusLine(params.id).subscribe((data) => this.line = data);

				this.getTimetable();
			}
		})
	}

	public getTimetable () {
		this.api.getBusLineTimetable(this.id).subscribe((data) => this.timetable = data);
	}
}
