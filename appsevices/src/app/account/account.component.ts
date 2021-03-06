import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.services';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(
    private loggingService:LoggingService,
    private accountService : AccountService
    ) { }

  ngOnInit(): void {
  }
   @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id,status);
    this.accountService.statusUpdate.emit(status);
    //this.loggingService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }

}
