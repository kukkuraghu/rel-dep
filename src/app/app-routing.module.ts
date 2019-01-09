import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { ReleaseSelectionComponent } from './release-selection/release-selection.component';
import { ReleaseDependenciesComponent } from './release-dependencies/release-dependencies.component';



const routes: Routes = [
	{ path: '', redirectTo: '/release-selection', pathMatch: 'full' },
	{ path: 'release-selection', component: ReleaseSelectionComponent},
	{ path: 'release-dependencies/:release', component: ReleaseDependenciesComponent}
];
@NgModule({
	imports: [RouterModule.forRoot(routes, {
		onSameUrlNavigation: 'reload',
		enableTracing: false // <-- debugging purposes only
	})],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
