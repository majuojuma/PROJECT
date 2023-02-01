import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';

const routes: Routes = [

{
  path:'',
  component:LoginComponent
},{
  path:'registor',
  component:RegistorComponent,
},
{
  path:'contact',
  component:ContactComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
