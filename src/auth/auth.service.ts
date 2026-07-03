import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(user: any) {
    return {
      message: 'User registered successfully',
      user,
    };
  }

  login(user: any) {
    return {
      message: 'Login successful',
      user,
    };
  }
}