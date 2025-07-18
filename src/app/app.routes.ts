import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

/**
 * Configuración de rutas principales de la aplicación.
 * Define la navegación, carga perezosa de componentes y protección mediante guardias.
 */
export const routes: Routes = [
  {
    // Redirecciona la ruta raíz a la página de inicio de sesión.
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    // Ruta para el componente de inicio de sesión.
    // Usa carga perezosa para optimizar el rendimiento.
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    // Ruta para la vista de lista de usuarios.
    // Protegida mediante authGuard para requerir autenticación.
    path: 'users',
    loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent),
    canActivate: [authGuard]
  },
  {
    // Ruta para la vista de detalle de un usuario específico.
    // Usa un parámetro dinámico (id) en la URL y está protegida por authGuard.
    path: 'user/:id',
    loadComponent: () => import('./components/user-detail/user-detail.component').then(m => m.UserDetailComponent),
    canActivate: [authGuard]
  },
  {
    // Ruta comodín para manejar rutas no reconocidas.
    // Redirige por defecto a la página de inicio de sesión.
    path: '**',
    redirectTo: '/login'
  }
];
