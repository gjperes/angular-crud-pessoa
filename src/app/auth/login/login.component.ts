import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.message = params['error']})
  }

  logar() {
    this.loading = true;
    if(this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((user) => {
        if (user !== null) {
          this.loginService.usuarioLogado = user;
          this.loading = false;
          this.router.navigate(["/home"]);
        } else {
          this.loading = false;
          this.message = "Usuário/Senha inválidos";
        }
      });
    }
  }
}
