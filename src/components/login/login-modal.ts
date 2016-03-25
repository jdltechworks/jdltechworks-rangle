import { Component, EventEmitter, Input, Output } from 'angular2/core';

import { RioModal, RioModalContent } from '../modal';
import { RioLoginForm } from './login-form';

@Component({
  selector: 'rio-login-modal',
  directives: [RioModal, RioModalContent, RioLoginForm],
  template: `
    <rio-modal>
      <rio-modal-content>
        <h1 class='mr2 ml2'>Login</h1>
        <rio-login-form
          [isPending]="isPending"
          [hasError]="hasError"
          (onSubmit)="handleSubmit($event)"></rio-login-form>
      </rio-modal-content>
    </rio-modal>
  `
})
export class RioLoginModal {
  @Input() isPending: boolean;
  @Input() hasError: boolean;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  handleSubmit(login) {
    this.onSubmit.emit(login);
  }
};
