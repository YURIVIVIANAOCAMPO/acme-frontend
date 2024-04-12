import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersLoginService } from '../services/users-login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-login',
  standalone: true,
  imports: [ FormsModule,],
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.css'
})
export class UsersLoginComponent implements OnInit {

constructor(
  private modalService:NgbModal,
  private UserLoginService:UsersLoginService
) 
{}
ngOnInit(): void {
  this.getAllUsers();
}
dataTable:any;
  atributUser = {
    name:'',
    email:'',
    password:''

  }
  getAllUsers()
  {
    this.UserLoginService.getAll().subscribe((res:any)=>{
      console.log(res);
      this.dataTable=res;
    })
  }
  createUsers()
  {
    this.UserLoginService.postUsers(this.atributUser).subscribe((res:any)=>{
      console.log(res);
      this.getAllUsers();
    })
    this.modalService.dismissAll();
  }

  open(content:any) {
    const modalRef = this.modalService.open(content);
    modalRef.componentInstance.name = 'World';
  }
  
}




