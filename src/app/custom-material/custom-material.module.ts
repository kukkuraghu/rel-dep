import {
	MatButtonModule,
	MatCheckboxModule,
	MatSelectModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatDatepickerModule,
	MatDatepicker,
	MatCardModule,
	MatRadioModule,
	MatNativeDateModule,
	MatTabsModule,
	MatSnackBarModule,
	MatTableModule,
	MatTooltipModule,
	MatDialogModule,
	MatTreeModule
} from '@angular/material';


const modules = [
	MatButtonModule,
	MatCheckboxModule,
	MatSelectModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatCardModule,
	MatDatepickerModule,
	MatRadioModule,
	MatNativeDateModule,
	MatTabsModule,
	MatSnackBarModule,
	MatTableModule,
	MatTooltipModule,
	MatDialogModule,
	MatTreeModule
];

import { NgModule } from '@angular/core';
@NgModule({
	imports: [...modules],
	exports: [...modules]
})
export class CustomMaterialModule {}
