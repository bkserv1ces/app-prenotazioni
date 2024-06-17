import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../servizi/login.service';

export const userGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggato()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggato() && loginService.haRuolo('ADMIN')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isLoggato()) {
    return true;
  } else {
    router.navigate(['/BukaroParty']);
    return false;
  }
};
