import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[busLate]'
})
export class BusLateDirective {
	@Input()
	set busLate(time) {
		console.dir(time);
		let theoretical = new Date(time.arriveetheorique);
		let real = new Date(time.arrivee);

		if (theoretical < real) {
			this.el.nativeElement.classList.add('bus-is-late');
		}
		else if (theoretical > real) {
			this.el.nativeElement.classList.add('bus-is-in-advance');
		}
	};

	constructor(private el: ElementRef) {
		console.info('busLate', el);
	}

}
