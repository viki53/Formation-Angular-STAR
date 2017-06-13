import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StarService } from './star.service';

import { StarComponent } from './star.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';

export { HomeComponent } from './home/home.component';
export { LineComponent } from './line/line.component';

const routes: Routes = [
	{
		path: 'star',
		children: [
			{
				path: 'line/:id',
				component: LineComponent
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
		RouterModule.forChild(routes),
		HttpModule
	],
	declarations: [
		HomeComponent,
		LineComponent,
		StarComponent
	],
	providers: [
		StarService
	]
})
export class StarModule { }
