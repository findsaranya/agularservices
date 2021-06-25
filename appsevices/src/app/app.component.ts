import { Component,OnInit } from '@angular/core';
import { AccountService } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit {
  title = 'appsevices';
   accounts:{name:string,status:string}[] = [];
constructor(private accountService:AccountService){}
ngOnInit(){
  this.accounts = this.accountService.accounts;
}
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountService.addAccount(newAccount);
  //   //this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   //this.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   this.accountService.updateStatus(updateInfo.id,updateInfo.newStatus);
  // }
}

