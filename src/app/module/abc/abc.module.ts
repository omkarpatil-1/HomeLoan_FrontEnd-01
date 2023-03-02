import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './DataTable/popup/popup.component';
import { TableComponent } from './DataTable/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MaterialModule } from '../shared/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


const routing: Routes = [
  {path: 'a', component:TableComponent },
  {path: 'b', component:PopupComponent }
 
  
];

@NgModule({
  declarations: [DashbordComponent, PopupComponent, TableComponent],
  imports: [
    
    MaterialModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    
    
    ReactiveFormsModule,
    FormsModule,
    
    
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class AbcModule { }
