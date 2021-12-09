import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LmService } from '../services/lm.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
keyParams:any
j:any
datauser={
  course:'',
  author:'',
  description:'',
  duration:"",
  image:'',
  original:'',
  selling:'',
  id:''
  
}
dataless={
  courseN:'',
  courseid:'',
  lesson:'',
  lessond:"",
  uid:'',
  
  
}


  constructor(private lm:LmService, private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })

  }
  dataArray:any
jh:any
size:any
fm:any
n:any
dtz:any
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
    this.fs.collection('courses').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.datauser.id=data.get('id')
      this.datauser.course=data.get('course')
      this.datauser.author=data.get('author')
      this.datauser.description=data.get('description')
      this.datauser.duration=data.get('duration')
      this.datauser.image=data.get('image')
      this.datauser.original=data.get('original')
      this.datauser.selling=data.get('selling')
   
    })
    this.fs.collection("lesson").snapshotChanges().subscribe((data)=>{
      console.log(data)
      this.dataArray= data.map(element=>{
        
        return{ 
          
          id:element.payload.doc.id,
         courseN:element.payload.doc.get('courseN'),
         courseid:element.payload.doc.get('courseid'),
         lesson:element.payload.doc.get('lesson'),
           lessond:element.payload.doc.get('lessond'),
           uid:element.payload.doc.get('uid'),
        
       
       }
       })
      

     })
     this.fs.collection("feedback").snapshotChanges().subscribe((data)=>{
      console.log(data)
      this.dtz= data.map(element=>{
        
        return{ 
          
          id:element.payload.doc.id,
          idc:element.payload.doc.get('idc'),
         feedback:element.payload.doc.get('feedback')
       
       }
       })
      

     })
    
    /*this.fs.collection('lesson').ref.doc().get().then(data=>{
      console.log(data.data())
      this.dataless.courseN=data.get('courseN')
      this.dataless.courseid=data.get('courseid')
      this.dataless.lesson=data.get('lesson')
      this.dataless.lessond=data.get('lessond')
      this.dataless.uid=data.get('uid')
       })*/
       this.j=localStorage.getItem('sl');
   }
      
buy(id:any){
  let data = {

    course :this.datauser.course,
    description:this.datauser.description,
    original: this.datauser.original,
    selling:this.datauser.selling,
    uid:localStorage.getItem('sl')
    
  };
  let results= this.fm.filter((x: any) => x);
   
 let m="true";
 console.log(this.size)
for(let t=0;t<=this.size-1;t++)
{
if(this.datauser.id===results[t].uid){
 m="false";
this.n="exist"
 }
}
if( m=="true" ){
 


  this.lm.addToCart(data).then(() => (console.log('good')))
  this.route.navigateByUrl('shopping')

}   
}
message(f:any){
  let data=f.value
  this.fs.collection('feedback').doc().set( { 
    uid:data.fee,
    idc:data.idc,
    feedback:data.feedback,

  
})
}          
      

}
