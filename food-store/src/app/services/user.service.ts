import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, username: 'admin', password: 'admin', isAdmin: true },
    { id: 2, username: 'user', password: 'user', isAdmin: false },
  ];

  constructor() {}

  login(username: string, password: string): User | null {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    return user ? { ...user } : null;
  }

  register(username: string, password: string): User {
    const newUser: User = {
      id: this.users.length + 1,
      username: username,
      password: password,
      isAdmin: false,
    };
    this.users.push(newUser);
    return { ...newUser };
  }

  getUserById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }
}
