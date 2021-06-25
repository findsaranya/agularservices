import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.services';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(
    private loggingService:LoggingService,
    private accountService:AccountService
    ) { }

  ngOnInit(): void {
  }

  

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount({name:accountName,status:accountStatus});
    this.loggingService.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }


}
