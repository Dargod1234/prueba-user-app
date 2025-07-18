import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.interface';

/**
 * Servicio para la gestión de usuarios.
 * Realiza operaciones CRUD sobre usuarios a través de un mock API (json-server).
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los usuarios registrados.
   * @returns Observable con la lista de usuarios.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Obtiene los detalles de un usuario por su ID.
   * @param id Identificador del usuario.
   * @returns Observable con los datos del usuario.
   */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Maneja errores HTTP de forma centralizada.
   * Permite capturar errores tanto del cliente como del servidor.
   * @param error Error HTTP recibido.
   * @returns Observable con el mensaje de error.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'Ocurrió un error inesperado.';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de red
      message = `Error de cliente: ${error.error.message}`;
    } else {
      // Error del servidor
      switch (error.status) {
        case 404:
          message = 'Recurso no encontrado (404).';
          break;
        case 500:
          message = 'Error interno del servidor (500).';
          break;
        default:
          message = `Error del servidor (${error.status}): ${error.message || error.statusText}`;
      }
    }

    console.error('UserService Error:', message);
    return throwError(() => new Error(message));
  }
}
