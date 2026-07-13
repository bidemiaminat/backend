import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  register(user: any) {
    return {
      message: 'User registered successfully',
      user,
    };
  }

  login(user: any) {
    const payload = {
      email: user.email,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      access_token,
    };
  }
}