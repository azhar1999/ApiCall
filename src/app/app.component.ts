import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { apiDatas } from './interfaces';
import { ServiceTestService } from './service-test.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'api';
  constructor(private service:ServiceTestService){
  }

  datas:any[]=[];

  id:number=2;

  newData:apiDatas={
    userId:11,
    id:104,
    title:"arya andrews",
    body:"andrews entry!!"
  }

  ngOnInit() 
  {
   this.suscribeData()
  }

  postClick():void{
    this.addData()

  }

  deleteClick():void{
    this.deleteData()

  }

  private suscribeData(): void {
    this.service.getApi()
    .subscribe(response => {

      this.datas=response  

    }, (error) => {
      console.log(error);
    });
  }

  private addData():void{
    this.service.postApi(this.newData).subscribe((response)=>{
      this.datas.push(response)
      console.log(response);}
      , (error) => {
        console.log(error);
      });
    }

  private deleteData():void{
    this.service.deleteApi(this.id).subscribe((response)=>{
      console.log(response);}

      , (error) => {
        console.log(error);
      });
  }

}
