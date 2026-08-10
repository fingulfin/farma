import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function authGuard(): boolean {
  const router = inject(Router);

  if (localStorage.getItem('auth_token')) {
    router.navigateByUrl('/admin/modules');
    return false;
  }

  return true;
}
