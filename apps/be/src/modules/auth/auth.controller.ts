import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn() {
    return this.authService.signIn();
  }

  @Post('sign-up')
  signUp() {
    return this.authService.signUp();
  }
}
