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
    this.initCss();

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
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    setTimeout(() => {
      this.element.style.opacity = '1';
    }, 200);
    // document.body.classList.add('ci-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.opacity = '0';
    setTimeout(() => {
      this.element.style.display = 'none';
    }, 200);

    console.log('Closed', this.element);
    // document.body.classList.remove('ci-modal-open');
  }

  initCss(): void {
    this.element.style.opacity = '0';
    this.element.style.display = 'none';
    this.element.style.MozTransition = 'opacity .4s ease';
    this.element.style.OTransition = 'opacity .4s ease';
    this.element.style.WebkitTransition = 'opacity .4s ease';
    this.element.style.transition = 'opacity .4s ease';
  }
}
