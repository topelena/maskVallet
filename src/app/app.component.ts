import { Component, OnInit } from '@angular/core';
import { WEB3 } from './web3';
import Web3 from 'web3';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  account: any = "";
  a: any = window;
  message: string = '';
  adress;
  b;
  c;
  price = '';

  // transactionParameters = {
  //   //gasLimit: '0x2710',  // customizable by user during MetaMask confirmation.
  //   to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  //   from: this.account, // must match user's active address.
  //   value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  //   //data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.

  // };


  constructor() { }
  //constructor(@Inject(WEB3) private web3: Web3) { }
  // accounts;
  // async ngOnInit() {
  //   console.log(this.web3)
  //   if ('enable' in this.web3.currentProvider) {

  //     await this.web3.currentProvider;
  //   }
  //   const accounts = await this.web3.eth.getAccounts();
  //   console.log(accounts);
  //   this.accounts = accounts;
  // }

  // async ngOnInit() {
  //   let b = this.a.ethereum
  //   if (typeof b !== 'undefined') {
  //     console.log('logged');
  //     const accounts = await b.enable()
  //     this.account = accounts[0]
  //     this.adress = this.a.ethereum.selectedAddress;
  //     console.log(this.adress);
  //     console.log(this.account)
  //     this.message = 'You are loged with MetaMask';
  //   } else {
  //     this.message = 'You are not loged Install MetaMask. please'
  //     console.log('NNN');
  //   }
  // }
  ngOnInit() {
    //this.price = "0x00"
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      this.b = this.a.ethereum
      if (this.b) {
        this.c = this.a.web3
        this.c = new Web3(this.b);
        try {
          // Request account access if needed
          const accounts = await this.b.enable();
          this.account = accounts[0]
          console.log(this.account)
          this.message = 'You are logged with MetaMask';

          // Acccounts now exposed
          //this.pay(this.transactionParameters, this.b.selectedAddress, this.price)
          // this.c.eth.sendTransaction({
          //   from: this.account,
          //   to: "0x0000000000000000000000000000000000000000",
          //   value: "0x00",

          // });
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      // else if (this.c) {
      //   this.c = new Web3(this.c.currentProvider);
      //   // Acccounts always exposed
      //   this.c.eth.sendTransaction({
      //     from: this.account,
      //     to: "0x0000000000000000000000000000000000000000",
      //     // value: "0x00",
      //     value: this.c.utils(1, "ether"),
      //   });
      // }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });
  }


  async pay() {
    this.price = "0x00"
    this.b = this.a.ethereum
    if (this.b) {
      this.c = this.a.web3
      this.c = new Web3(this.b);
      try {
        // Request account access if needed
        const accounts = await this.b.enable();
        this.account = accounts[0]
        console.log(this.account)
        // Acccounts now exposed
        //this.pay(this.transactionParameters, this.b.selectedAddress, this.price)
        this.c.eth.sendTransaction({
          from: this.account,
          to: "0x0000000000000000000000000000000000000000",
          value: this.price,

        });
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (this.c) {
      this.c = new Web3(this.c.currentProvider);
      // Acccounts always exposed
      this.c.eth.sendTransaction({
        from: this.account,
        to: "0x0000000000000000000000000000000000000000",
        // value: "0x00",
        value: this.c.utils(1, "ether"),
      });
    }
    // Non-dapp browsers...
    else {
      this.message = 'Non-Ethereum browser detected. You should consider trying MetaMask!';
    }

  }


}


