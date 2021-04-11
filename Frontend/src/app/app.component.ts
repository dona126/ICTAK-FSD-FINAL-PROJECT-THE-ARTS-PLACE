import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  constructor(public _auth:AuthService,
    private _router:Router){

}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/products'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}
loggedUserArticle()
{
  this._router.navigate(['/article'])
}
loggedUserVideo()
{
  this._router.navigate(['/video'])
}
}
