import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

/**
 * Componente principal para manejar la pantalla de inicio de sesión.
 * Recibe las credenciales del componente hijo `LoginFormComponent` y autentica al usuario.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Maneja el evento de envío de credenciales y redirige si son válidas.
   * @param credentials Credenciales del usuario.
   */
  handleLogin(credentials: { username: string; password: string }): void {
    this.authService.login(credentials).subscribe({
      next: (authenticated) => {
        if (authenticated) {
          this.router.navigate(['/users']);
        } else {
            this.snackBar.open('Credenciales inválidas. Intenta nuevamente.', 'Cerrar', {
              duration: 4000,
              panelClass: 'snackbar-error',
              horizontalPosition: 'center',
              verticalPosition: 'bottom' 
            });
        }
      },
      error: () => {
        this.snackBar.open('Error de conexión. Intenta más tarde.', 'Cerrar', {
          duration: 4000,
          panelClass: 'snackbar-error'
        });
      }
    });
  }
}
