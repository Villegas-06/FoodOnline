import { CanActivateFn } from '@angular/router';
import { PermissionsService } from './services/permission.service';
import { Router } from '@angular/router'; // Importa Router

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router(); // Se crea una instancia de Router (puede no ser la mejor forma, ver abajo)
  const permissionsService = new PermissionsService(router); // Se le pasa el Router
  return permissionsService.canActivate();
};
