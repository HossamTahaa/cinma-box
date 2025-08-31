import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  
  constructor(private router :Router){}

  onSubmit(){
    console.log(this.email,this.password);
    if(this.email && this.password){
      this.router.navigate(['/movie-list']);
    }
   }
}
