import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';
import { UserInfoComponent } from '../user-detail/user-info/user-info.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * Muestra el detalle de un usuario obtenido por ID desde la URL.
 * Usa `UserService` para cargar los datos y permite volver a la lista.
 */
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    UserInfoComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe({
      next: data => this.user = data,
      error: () => alert('Usuario no encontrado')
    });
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
