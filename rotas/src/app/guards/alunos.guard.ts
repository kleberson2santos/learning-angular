import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild{
    
    constructor() {        
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('AlunosGuard: Guarda de rota filha');
        
        if (state.url.includes('editar')){
            //alert('Usuario sem acesso');
            //return Observable.of(false);
        }

        return true;
    }
}