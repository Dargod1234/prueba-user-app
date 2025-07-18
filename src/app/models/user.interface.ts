/**
 * Interfaz que define la estructura de un objeto de usuario.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  position: string; 
}

/**
 * Interfaz para las credenciales usadas en el inicio de sesión.
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Interfaz de la respuesta del servidor tras autenticar.
 */
export interface AuthResponse {
  username: string;
  password: string;
}
