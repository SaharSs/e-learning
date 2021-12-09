import { Component, OnInit } from '@angular/core';

import { LmService } from '../services/lm.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private lm:LmService) { }
size:any
fm:any
paymentHandler:any = null;
  ngOnInit(): void {
    this.lm.getCart().subscribe((cart) => {
      this.size=cart.length
  	this.fm= cart.map((shopping) => {
				 return {
					id: shopping.payload.doc.id,
          course:shopping.payload.doc.get('course'),
          description:shopping.payload.doc.get('description'),
          original:shopping.payload.doc.get('original') ,
          selling:shopping.payload.doc.get('selling'),
        };
        
			});
     
		})
    this.invokeStripe()
  
}
t:any=0
tot(){
  let le=this.fm.filter((y: any)=>y);

for( let f=0;f<=this.size-1;f++){
 
 
  if(le[f].selling==0){
   
    this.t+=le[f].original;
  
  }else{
this.t+=le[f].selling

}
   
}
console.log(this.t)
return this.t
}
confirm() {
  let le=this.fm.filter((y: any)=>y);
          

let data = {
  name: localStorage.getItem('ls'),
  total: this.tot(),
  uid: localStorage.getItem('sl'),
  adress:localStorage.getItem('gt'),
  date : firebase.firestore.FieldValue.serverTimestamp(),
  
  };
 
console.log(data.date)

    this.lm.orders(data).then(()=>console.log("yes"));
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JducsAi0N2fpujzKyiS120MyqAYnpWCa468Heo0m9xiKgOZoQ7yf6DChrrYrWhXDIzN12oGNRdou6IlUn3iqjI1008yLUBSu4',
      locale: 'auto',
     
      token: function (stripeToken: any) {
        console.log(stripeToken);

        window.location.href = "/shopping/"+data.uid;
        
      }
     
    }
    );
    
    
    paymentHandler.open({
      name: 'e commerce',
      description: 'computer',
      amount:data.total
    });
   
           

 
       }
      invokeStripe() {
        if(!window.document.getElementById('stripe-script')) {
          const script = window.document.createElement("script");
          script.id = "stripe-script";
          script.type = "text/javascript";
          script.src = "https://checkout.stripe.com/checkout.js";
          script.onload = () => {
            this.paymentHandler = (<any>window).StripeCheckout.configure({
              key: 'pk_test_51JducsAi0N2fpujzKyiS120MyqAYnpWCa468Heo0m9xiKgOZoQ7yf6DChrrYrWhXDIzN12oGNRdou6IlUn3iqjI1008yLUBSu4',
              locale: 'auto',
              token: function (stripeToken: any) {
                console.log(stripeToken)
                alert('Payment has been successfull!');
              }
            });
          }
            
          window.document.body.appendChild(script);
        }
}
}