import { Injectable } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
