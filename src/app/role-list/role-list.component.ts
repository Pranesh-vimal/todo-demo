import { RoleService } from '../role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit {
  constructor(private roleService: RoleService) {}
  todos = [];

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe((data: any) => {
      this.todos = data;
    });
  }
}
