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

  setModalOption(vm, option) {
    if (option === 'login') {
      vm.loginMode = true;
      vm.signupMode = false;
      vm.forgotMode = false;
    } else if (option === 'signup') {
      vm.loginMode = false;
      vm.signupMode = true;
      vm.forgotMode = false;
    } else {
      vm.loginMode = false;
      vm.signupMode = false;
      vm.forgotMode = true;
    }
  }
}
