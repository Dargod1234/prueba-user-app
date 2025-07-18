import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../models/user.interface';

/**
 * Componente que muestra una tabla de usuarios.
 * Permite emitir un evento para ver los detalles de un usuario específico.
 */
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  /**
   * Lista de usuarios a mostrar en la tabla.
   */
  @Input() users: User[] = [];

  /**
   * Evento emitido al hacer clic en el botón de detalles de un usuario.
   * Envía el ID del usuario seleccionado.
   */
  @Output() userDetailsClick = new EventEmitter<number>();

  /**
   * Columnas a mostrar en la tabla.
   */
  displayedColumns: string[] = ['name', 'email', 'company', 'position', 'actions'];

  /**
   * Maneja el clic en el botón de "ver detalles" de un usuario.
   * @param userId ID del usuario seleccionado.
   */
  onViewDetails(userId: number): void {
    this.userDetailsClick.emit(userId);
  }
}
