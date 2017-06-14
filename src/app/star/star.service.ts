import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StarService {
	private apiRoot: string = 'https://data.explore.star.fr';

	constructor(
		private http: Http
	) { }

	public getBusLines(query: string = ''): Observable<any[]> {
		return this.http.get(this.apiRoot + '/api/records/1.0/search/?dataset=tco-bus-topologie-lignes-td&facet=nomfamillecommerciale&rows=200&sort=nomcourt,id' + (query ? '&q=' + encodeURIComponent(query) :'') )
			.map(data => data.json().records)
			.map(records => records.map(record => record.fields));
	}

	public getBusLine(id: string): Observable<any> {
		return this.http.get(this.apiRoot + `/api/records/1.0/search/?dataset=tco-bus-topologie-lignes-td&sort=nomcourt%2Cid&facet=nomfamillecommerciale&refine.id=${id}`)
			.map(data => data.json().records)
			.map(records => records[0])
			.map(record => record.fields);
	}

	public getBusLineTimetable(id: string): Observable<any[]> {
		return this.http.get(this.apiRoot + `/api/records/1.0/search/?dataset=tco-bus-circulation-passages-tr&facet=idligne&facet=nomcourtligne&facet=sens&facet=destination&facet=precision&refine.idligne=${id}`)
			.map(data => data.json().records)
			.map(records => records.map(record => record.fields));
	}

	public getBusStop(id: string): Observable<any> {
		return this.http.get(this.apiRoot + `/api/records/1.0/search/?dataset=tco-bus-topologie-pointsarret-td&facet=codeinseecommune&facet=nomcommune&facet=estaccessiblepmr&facet=mobilier&refine.id=${id}`)
			.map(data => data.json().records)
			.map(records => records[0])
			.map(record => record.fields);
	}

	public getBusStopTimetable(id: string, lineid: string = ''): Observable<any[]> {
		return this.http.get(this.apiRoot + `/api/records/1.0/search/?dataset=tco-bus-circulation-passages-tr&facet=idligne&facet=nomcourtligne&facet=sens&facet=destination&facet=precision&refine.idarret=${id}` + (lineid ? '&refine.idligne=' + encodeURIComponent(lineid) :''))
			.map(data => data.json().records)
			.map(records => records.map(record => record.fields));
	}
}
