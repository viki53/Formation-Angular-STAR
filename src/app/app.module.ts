import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import './rxjs';

import { StarModule } from './star/star.module';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/star'
	}
]

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		RouterModule.forRoot(routes),
		StarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
