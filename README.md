# User Management App - Prueba Técnica Angular

## Descripción del Proyecto

Aplicación web desarrollada en Angular que permite gestionar usuarios a través de un sistema de autenticación y visualización de datos. La aplicación consume datos de un servidor ficticio creado con json-server.

## Características Implementadas

### ✅ Funcionalidades Principales
- **Sistema de Autenticación**: Login con validación de credenciales
- **Lista de Usuarios**: Visualización en tabla con datos del servidor
- **Detalles de Usuario**: Vista detallada de información específica
- **Navegación Protegida**: Guard para rutas autenticadas
- **Manejo de Errores**: Gestión adecuada de errores de API
- **Indicadores de Carga**: Spinners durante las peticiones HTTP

### ✅ Arquitectura Angular
- **Componentes**: Estructura padre-hijo implementada
- **Servicios**: AuthService y UserService para lógica de negocio
- **Routing**: Navegación entre páginas con protección
- **Directivas**: Uso de `*ngIf`, `*ngFor`, `[disabled]`, `(click)`
- **Reactive Forms**: Formularios con validaciones

### ✅ Diseño y UX
- **Angular Material**: Framework UI profesional
- **Responsive Design**: Adaptable a diferentes dispositivos
- **Interfaz Intuitiva**: Navegación clara y accesible
- **Estados Visuales**: Loading, error y success states

## Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Angular Material**: Componentes UI
- **SCSS**: Estilos avanzados
- **RxJS**: Manejo de observables
- **json-server**: Servidor ficticio para API

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI

## Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd user-management-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Instalar json-server globalmente
```bash
npm install -g json-server
```

## Ejecución del Proyecto

### 1. Iniciar el servidor ficticio
```bash
json-server --watch db.json --port 3000
```

### 2. Iniciar la aplicación Angular (en otra terminal)
```bash
ng serve
```

### 3. Acceder a la aplicación
- URL: `http://localhost:4200`
- Credenciales de prueba:
  - **Usuario**: admin
  - **Contraseña**: 123456

## Estructura del Proyecto

```
src/app/
├── components/
│   ├── login/              # Componente de autenticación
│   ├── user-list/          # Lista de usuarios
│   └── user-detail/        # Detalles del usuario
├── services/
│   ├── auth.service.ts     # Servicio de autenticación
│   └── user.service.ts     # Servicio de usuarios
├── guards/
│   └── auth.guard.ts       # Protección de rutas
├── models/
│   └── user.interface.ts   # Interfaces TypeScript
├── app.config.ts           # Configuración de la aplicación
└── app.routes.ts           # Definición de rutas
```

## Datos del Servidor Ficticio

El archivo `db.json` contiene:
- **Autenticación**: Credenciales de usuario
- **Usuarios**: Array con 5 usuarios de ejemplo

### Endpoints Disponibles
- `GET /auth` - Credenciales de autenticación
- `GET /users` - Lista completa de usuarios
- `GET /users/:id` - Detalles de usuario específico

## Flujo de la Aplicación

1. **Login**: Autenticación con credenciales
2. **Lista de Usuarios**: Visualización en tabla
3. **Detalles**: Vista específica de cada usuario
4. **Navegación**: Botones para volver y logout

## Decisiones de Diseño

### Autenticación
- Uso de localStorage para persistencia básica
- BehaviorSubject para estado reactivo
- Guard para protección de rutas

### Manejo de Errores
- Interceptación en servicios
- Mensajes informativos al usuario
- Botones de reintento

### UI/UX
- Angular Material para consistencia
- Responsive design con CSS Grid/Flexbox
- Animaciones sutiles para mejor experiencia

### Arquitectura
- Servicios separados por responsabilidad
- Componentes reutilizables
- Interfaces TypeScript para type safety

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar tests
ng test

# Build para producción
ng build --prod

# Analizar bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/user-management-app/stats.json
```

## Posibles Mejoras Futuras

- Implementar refresh token
- Añadir paginación en lista de usuarios
- Agregar filtros y búsqueda
- Implementar CRUD completo
- Añadir tests unitarios y e2e
- Internacionalización (i18n)

## Contacto

Para cualquier pregunta sobre la implementación, no dudes en contactarme.

---

**Desarrollado como parte de prueba técnica para posición de Desarrollador de Software**