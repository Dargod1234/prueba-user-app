import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginCredentials, AuthResponse } from '../models/user.interface';

/**
 * Servicio que gestiona la autenticación del usuario.
 * Controla el inicio/cierre de sesión y el estado autenticado global.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000'; 

  /** Estado interno de autenticación del usuario. */
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  /** Observable público para escuchar cambios de autenticación. */
  public readonly isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthStatus(); 
  }

  /**
   * Autentica al usuario con las credenciales proporcionadas.
   * Simula una petición a `/auth` en json-server.
   * @param credentials Credenciales del usuario.
   * @returns Observable con el resultado de la autenticación.
   */
  login(credentials: LoginCredentials): Observable<boolean> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/auth`).pipe(
      map((authData) => {
        const isValid = authData.username === credentials.username &&
                        authData.password === credentials.password;

        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          this.isAuthenticatedSubject.next(true);
        }

        return isValid;
      })
    );
  }

  /**
   * Cierra la sesión del usuario.
   * Limpia localStorage y actualiza el estado.
   */
  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * Verifica el estado de autenticación en el arranque.
   */
  private checkAuthStatus(): void {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticatedSubject.next(isAuth);
  }

  /**
   * Consulta directa del estado autenticado (sincrónica).
   * @returns `true` si el usuario está autenticado.
   */
  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
