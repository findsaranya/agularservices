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
  getAccounts(){
      return this.accounts;
  }
  addAccount(newAccount:{name:string,status:string}){
       this.accounts.push(newAccount);
  }
  updateStatus(id: number, newStatus: string){
       this.accounts[id].status = newStatus;
  }
}