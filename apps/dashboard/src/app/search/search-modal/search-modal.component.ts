import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  getShowErrorChange(): any {
    return this.showModalChange;
  };

  closeModal(): void {
    this.showModalChange.emit(!this.showModal);
  };

  getShowModal(): any {
    return this.showModalChange;
  };

  closeShowModal(): void {
    this.showModalChange.emit(!this.showModal);
  };
}
