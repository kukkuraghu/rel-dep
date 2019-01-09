import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './/app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ReleaseSelectionComponent } from './release-selection/release-selection.component';
import { ReleaseDependenciesComponent } from './release-dependencies/release-dependencies.component';

@NgModule({
	declarations: [
		AppComponent,
		ReleaseSelectionComponent,
		ReleaseDependenciesComponent
	],
	imports: [
		BrowserModule,
		CustomMaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		Ng4LoadingSpinnerModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
