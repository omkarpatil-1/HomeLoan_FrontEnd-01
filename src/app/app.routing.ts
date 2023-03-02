import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';
import { EmicalComponent } from './home/emical/emical.component';
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { ViewAppComponent } from './module/accounthead/view-app/view-app.component';
import { SanctionComponent } from './module/accounthead/sanction/sanction.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { ApplyprocessComponent } from './home/applyprocess/applyprocess.component';
import { FaqComponent } from './home/faq/faq.component';
import { BankmanagerModule } from './module/bankmanager/bankmanager.module';
import { TeleheadModule } from './module/telehead/telehead.module';
import { FrontpageComponent } from './home/frontpage/frontpage.component';



export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:"",component:FrontpageComponent
      },
      {
        path:"emical",component:EmicalComponent
      },
      {
        path:"about",component:AboutusComponent
      },
      {
        path:"contact",component:ContactusComponent
      },
      {
        path:"apply",component:ApplyprocessComponent
      },
      {
        path:"faq",component:FaqComponent
      },
      {
        path:"front",component:FrontpageComponent
      }

    ]
  },
  {
    path:"log",component:LoginComponent
  },


  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>CreditmanagerModule},
      {path:'relation',loadChildren:()=>RelationexecutiveModule},
      {path:'account',loadChildren:()=>AccountheadModule},
      {path:'Admin',loadChildren:()=>AbcModule},
     
      {path:'manager',loadChildren:()=>BankmanagerModule},
      {path:'telehead',loadChildren:()=>TeleheadModule}
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



