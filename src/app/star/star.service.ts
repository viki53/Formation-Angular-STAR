import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StarService {
	private apiRoot: string = 'https://data.explore.star.fr';

	constructor(
		private http: Http
	) { }

	public getBusLines(): Observable<any[]> {
		return this.http.get(this.apiRoot + '/api/records/1.0/search/?dataset=tco-bus-topologie-lignes-td&facet=nomfamillecommerciale&rows=200&sort=nomcourt,id')
			.map(data => data.json().records)
			.map(records => records.map(record => record.fields));
	}

	public getBusLine(id: string): Observable<any> {
		return this.http.get(this.apiRoot + `/api/records/1.0/search/?dataset=tco-bus-topologie-lignes-td&sort=nomcourt%2Cid&facet=nomfamillecommerciale&refine.id=${id}`)
			.map(data => data.json().records)
			.map(records => records[0])
			.map(record => record.fields);
	}

}
