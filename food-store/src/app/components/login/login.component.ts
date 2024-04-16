import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const user = this.userService.login(this.username, this.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Autenticado, seras dirido a la pagina principal',
      });
      this.router.navigate(['/register']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o Contraseña incorrectos',
      });
    }
  }
}
