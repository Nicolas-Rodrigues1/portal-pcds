import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable, tap } from 'rxjs';

interface AuthResponse{
  acess_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private userService: UserService) { }

  autenticar(email: string, senha: string): Observable<AuthResponse>{
    const emailFict = 'nicolas@gmail.com';
    const senhaFict = '1234';
    const tokenFict = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5pY29sYXMgVGVzdGUiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

    return new Observable<AuthResponse>((observer) => {
      if (email === emailFict && senha === senhaFict){
        observer.next({acess_token: tokenFict});
      } else {
        observer.error( new Error('Credenciais inválidas'));
      }
    }).pipe(
      tap((response) => {
        const authToken = response.acess_token;
        this.userService.salvarToken(authToken)
      })
    )
  }
}
