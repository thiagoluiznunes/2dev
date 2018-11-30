import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'ci-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;
    // this.element.style.display = 'block';
    // this.element.style.opacity = '0';
    // this.element.style.trasition  = 'opacity ease .4s';
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'ci-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    console.log('Destroyed');
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.opacity = '1';
    this.element.style.display = 'block';
    console.log('Open', this.element);
    document.body.classList.add('ci-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.opacity = '0';
    this.element.style.display = 'none';
    console.log('Closed', this.element);
    document.body.classList.remove('ci-modal-open');
  }
}
