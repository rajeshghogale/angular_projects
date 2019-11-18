import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModalRef, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  user: { name: string; age: number; };
  newUser: { name: string; age: number; };
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  modalRef :NgbModalRef ;
  modalTitle: string;
  name: string;
  age: number;


  userForm = this.fb.group({
    firstname:['',Validators.required],
    lastName:[''],
    mobileNumber:['',Validators.minLength(10)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.firstname} Email: ${this.userForm.value.lastName}`);
    }
  }

  constructor(
    public activeModal: NgbActiveModal,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    // console.log(this.user);
    // this.newUser = this.user;
    // this.user = null;
  }

  submitForm() {
    this.newUser = {
      name : this.name,
      age : this.age
    };
    this.passEntry.emit(this.newUser);
    this.activeModal.close('close modal');
  }

}
