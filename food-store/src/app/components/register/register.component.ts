import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  successMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    const user = this.userService.register(this.username, this.password);

    this.router.navigate(['/login']);

    Swal.fire({
      icon: 'success',
      title: 'Correcto',
      text: `Usuario ${user.username} registrado exitosamente.`,
    });
  }
}
