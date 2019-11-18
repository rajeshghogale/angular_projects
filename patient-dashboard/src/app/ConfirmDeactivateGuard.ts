import { CanDeactivate } from '@angular/router';
import { CaseAutomationComponent } from './case-automation/case-automation.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ConfirmDeactivateGuard implements CanDeactivate<CaseAutomationComponent> {

  canDeactivate(target: CaseAutomationComponent) {
    if(!target.isModalOpen){
        return window.confirm('Data will be erased !!!  Do you really want to cancel?');
    }
    return true;
  }
}