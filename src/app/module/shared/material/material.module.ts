import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table"
import {MatInputModule} from "@angular/material/input"
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  exports:[
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule
    
  ]
})
export class MaterialModule { }
