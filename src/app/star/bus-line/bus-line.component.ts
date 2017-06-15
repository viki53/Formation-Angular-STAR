import { Component, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Component({
	selector: 'bus-line',
	templateUrl: './bus-line.component.html',
	styleUrls: ['./bus-line.component.css'],
	inputs: ['line']
})
export class BusLineComponent implements OnInit {
	@Input() line;

	constructor(el: ElementRef, rend: Renderer) {
	}

	ngOnInit() {
	}

}
