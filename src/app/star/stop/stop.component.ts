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

	public stop: Observable<any>;
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

				this.stop = this.api.getBusStop(params.id);

				if (params.lineid) {
					this.lineid = params.lineid;

					this.line = this.api.getBusLine(params.lineid);
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
			this.timetable = this.api.getBusStopTimetable(this.id, this.lineid);
		}
		else {
			this.timetable = this.api.getBusStopTimetable(this.id);
		}
	}

}
