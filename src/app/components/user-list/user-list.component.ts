import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';
import { UserTableComponent } from '../user-list/user-table/user-table.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service'; 

/**
 * Componente contenedor que obtiene y muestra la lista de usuarios.
 * Utiliza el componente `UserTableComponent` para mostrar los datos.
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserTableComponent, HighlightDirective, MatButtonModule, MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  /**
   * Arreglo de usuarios cargados desde el servicio.
   */
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService 
  ) {}

  /**
   * Obtiene los usuarios al inicializar el componente.
   */
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: data => this.users = data,
      error: (err) => console.error('Error al obtener usuarios:', err) 
    });
  }

  /**
   * Redirige a la vista de detalle del usuario seleccionado.
   * Este nombre coincide con el usado en el HTML (viewDetails).
   * @param userId ID del usuario a consultar.
   */
  viewDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }

  /**
   * Maneja la acción de cerrar sesión del usuario.
   * Llama al método `logout` del `AuthService` y redirige a la página de inicio de sesión.
   */
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}
