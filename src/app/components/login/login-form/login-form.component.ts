import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

/**
 * Componente de formulario de inicio de sesión.
 * Emite un evento con las credenciales ingresadas cuando el formulario es válido.
 */
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  /**
   * Evento emitido al enviar el formulario con las credenciales.
   */
  @Output() loginSubmit = new EventEmitter<{ username: string, password: string }>();

  /**
   * Grupo de controles del formulario reactivo.
   */
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Llama al evento `loginSubmit` si el formulario es válido.
   */
  submit(): void {
    if (this.form.valid) {
      this.loginSubmit.emit(this.form.value);
    }
  }
}
