import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // Si la ruta no tiene roles definidos, permite el acceso
    }

    const { user } = context.switchToHttp().getRequest();
    const userRole = user?.rol.perfil; // El rol está en el payload del token
   // console.log(userRole);

    if (!requiredRoles.includes(userRole)) {
      throw new ForbiddenException('No tienes permiso para acceder a esta ruta');
    }

    return true;
  }
}
