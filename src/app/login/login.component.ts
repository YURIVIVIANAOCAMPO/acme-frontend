import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { PruebaService } from '../services/prueba.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor (private PruebaService:PruebaService) {
  
 }
 userLogin = {
  email: '',
  password: '',
};

 login (){
  this.PruebaService.login(this.userLogin).subscribe((res:any)=>{
    console.log("Respuesta api",res)
  })
 }
}
