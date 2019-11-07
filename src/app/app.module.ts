import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
