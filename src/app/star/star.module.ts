import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StarService } from './star.service';

import { StarComponent } from './star.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { StopComponent } from './stop/stop.component';

export { HomeComponent } from './home/home.component';
export { LineComponent } from './line/line.component';
export { StopComponent } from './stop/stop.component';

export { StarService } from './star.service';

const routes: Routes = [
	{
		path: 'star',
		children: [
			{
				path: 'line/:id',
				component: LineComponent
			},
			{
				path: 'line/:lineid/stop/:id',
				component: StopComponent
			},
			{
				path: 'stop/:id',
				component: StopComponent
			},
			{
				path: '',
				pathMatch: 'full',
				component: HomeComponent
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes),
		HttpModule
	],
	declarations: [
		HomeComponent,
		LineComponent,
		StarComponent,
		StopComponent
	],
	providers: [
		StarService
	]
})
export class StarModule { }
