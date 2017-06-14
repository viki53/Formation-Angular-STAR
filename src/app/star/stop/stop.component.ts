import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StarService } from '../star.service';

@Component({
	selector: 'app-stop',
	templateUrl: './stop.component.html',
	styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
	private id: string;
	private lineid: string;

	public stop: any;
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

				this.api.getBusStop(params.id).subscribe((data) => this.stop = data);

				if (params.lineid) {
					this.lineid = params.lineid;

					this.api.getBusLine(params.lineid).subscribe((data) => this.line = data);
				}
				else {
					this.lineid = undefined;
				}

				this.getTimetable();
			}
		});
	}

	public getTimetable () {
		if (this.lineid) {
			this.api.getBusStopTimetable(this.id, this.lineid).subscribe((data) => this.timetable = data);
		}
		else {
			this.api.getBusStopTimetable(this.id).subscribe((data) => this.timetable = data);
		}
	}

}
