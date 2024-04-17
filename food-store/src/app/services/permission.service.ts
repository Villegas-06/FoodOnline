import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PermissionsService {
  constructor(private router: Router) {}

  // Método para verificar si el usuario es admin
  isAdmin(): boolean {
    const isAdminString = localStorage.getItem("currentUser");

    // Verificar si el valor de "currentUser" es nulo o no
    if (isAdminString) {
      const user = JSON.parse(isAdminString);
      return user.isAdmin === true; // Verificar si el usuario es admin
    }

    return false; // Si no hay "currentUser" o no es admin, devuelve falso
  }

  // Método para manejar la lógica de acceso
  canActivate(): boolean {
    if (this.isAdmin()) {
      return true; // Permitir acceso si está autenticado y es admin
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no cumple los requisitos
      return false; // Denegar acceso
    }
  }
}
