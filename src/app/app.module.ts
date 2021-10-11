import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { FormAddTodoComponent } from './components/Add-Todo/add-todo.component';
import { TodosComponent } from './components/Todos/todos.component';
import { TodoComponent } from './components/Todo/todo.component';
import { EditTodoComponent } from './components/Edit-Todo/edit-todo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/Home/home.component';
import { TodosPageComponent } from './pages/Todos/todos.component';
import { AboutPageComponent } from './pages/About/about.component';
import { NotFoundComponent } from './pages/Not-Found/not-found.component';

const routes : Routes = [
  { path : '' , component : HomePageComponent },
  { path : 'todos' , component : TodosPageComponent },
  { path : 'about' , component : AboutPageComponent },
  { path : '404' , component : NotFoundComponent , data : { title : 'Page Not Found!'} },
  { path : '**' , redirectTo : '/404'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormAddTodoComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent,
    HomePageComponent,
    TodosPageComponent,
    AboutPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
