import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'app-release-selection',
	templateUrl: './release-selection.component.html',
	styleUrls: ['./release-selection.component.css']
})
export class ReleaseSelectionComponent implements OnInit {
	selected: string;
	constructor(private router: Router) { }

	ngOnInit() {
	}
	releaseSelected() {
		console.log('inside releaseSelected');
		console.log(this.selected);
		this.router.navigate(['/release-dependencies/' + this.selected]);
	}
}
