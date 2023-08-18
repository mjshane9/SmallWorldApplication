import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/service/main.service';
import { User as user } from '../../models/user.model'


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit{
  id:number = 0;
  userDetail:user = {
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    avatar:''
  };
  
  constructor(private userService:MainService,private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      console.log(params)
      this.id = params['id']
      this.userService.getUserDetail(this.id).subscribe((data:any)=>{
        this.userDetail = data.data;
      })
    })
  }

}
