import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class ReleaseNode {
	children: ReleaseNode[];
	releaseName: string;
	version: string;
}

/** Flat node with expandable and level information */
export class ReleaseFlatNode {
	constructor(public expandable: boolean, public releaseName: string, public level: number, public version: string) {
	}
}

const TREE_DATA = {
	"BHNNY-Production": {
		"Dashboard": '6.2',
		"Population_Loader": "6.1",
		"Careplan-App": '6.0'
	},
	"BHNNY-QA": {
		"Dashboard": '6.2',
		"Population_Loader": "6.1",
		"Careplan-App": '6.0',
		"Magic-App": {
			"Messages": "5.0",
			"Alerts": "6.2"
		}
	}
};


@Component({
	selector: 'app-release-dependencies',
	templateUrl: './release-dependencies.component.html',
	styleUrls: ['./release-dependencies.component.css']
})
export class ReleaseDependenciesComponent implements OnInit {
	treeControl: FlatTreeControl<ReleaseFlatNode>;
	treeFlattener: MatTreeFlattener<ReleaseNode, ReleaseFlatNode>;
	dataSource: MatTreeFlatDataSource<ReleaseNode, ReleaseFlatNode>;

	constructor() {
		this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
		this.treeControl = new FlatTreeControl<ReleaseFlatNode>(this._getLevel, this._isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
	}

	ngOnInit() {
		this.dataSource.data = this.buildFileTree(TREE_DATA, 0);
	}

	buildFileTree(obj: {[key: string]: any}, level: number): ReleaseNode[] {
		return Object.keys(obj).reduce<ReleaseNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new ReleaseNode();
			node.releaseName = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
				} else {
					node.version = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}

	transformer = (node: ReleaseNode, level: number) => {
		return new ReleaseFlatNode(!!node.children, node.releaseName, level, node.version);
	}

	private _getLevel = (node: ReleaseFlatNode) => node.level;

	private _isExpandable = (node: ReleaseFlatNode) => node.expandable;

	private _getChildren = (node: ReleaseNode): Observable<ReleaseNode[]> => observableOf(node.children);

	hasChild = (_: number, _nodeData: ReleaseFlatNode) => _nodeData.expandable;

}
