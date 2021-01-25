import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  public userMeals: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(
        take(1)
      )
      .subscribe((response) => this.userMeals = (response && response.myMeals) || []);
  }

  ngOnInit(): void {
  }

}
