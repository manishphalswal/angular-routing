import { IUser } from './../../../interfaces/users/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  selectedUser: any;

  users: IUser[] = [];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.users  = this.userService.getUsers();

    this.activatedRoute.params.subscribe(params => {
      console.log("UserId: ", +params.id);

      let user : any[] = this.users.filter(user => {
        return user.id === +params.id
      });

      this.selectedUser = user.length > 0 ?  user[0] : null;
    });

    this.activatedRoute.queryParams.subscribe(qs => {
      console.log("Query Params: ", qs);
    });
    
  }

}
