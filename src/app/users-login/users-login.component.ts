import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-login',
  standalone: true,
  imports: [],
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.css'
})
export class UsersLoginComponent {
/**
 *
 */
constructor(private modalService:NgbModal) {
  
  
}
open(content:any) {
  const modalRef = this.modalService.open(content);
  modalRef.componentInstance.name = 'World';
}
}
