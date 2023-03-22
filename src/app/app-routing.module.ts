import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/edit/:id', component: TaskEditComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit', component: ProfileEditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
