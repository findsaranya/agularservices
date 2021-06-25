export class AccountService{
     accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  
  addAccount(newAccount:{name:string,status:string}){
       this.accounts.push(newAccount);
  }
  updateStatus(id: number, newStatus: string){
       this.accounts[id].status = newStatus;
  }
}