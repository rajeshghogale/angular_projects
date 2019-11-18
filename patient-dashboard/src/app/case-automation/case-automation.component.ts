import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from './modal-content/modal-content.component';

@Component({
  selector: 'app-case-automation',
  templateUrl: './case-automation.component.html',
  styleUrls: ['./case-automation.component.css'],
})
export class CaseAutomationComponent implements OnInit {

  @Input() private modalTitle = "Child Modal";
  isModalOpen:boolean;

  // @Input() private user = {
  //   name: 'Izzat Nadiri',
  //   age: 26
  // };

  userArray:any = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    this.isModalOpen = true;
    const modalRef = this.modalService.open(ModalContentComponent);
    console.log(modalRef.componentInstance)
    //modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.modalTitle = this.modalTitle;

    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry)
      this.userArray.push(receivedEntry);
      this.isModalOpen = false;
    })
  }

}
