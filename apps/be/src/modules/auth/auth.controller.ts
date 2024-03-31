import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../user';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('sign-in')
  signIn() {
    return this.authService.signIn();
  }

  @Post('sign-up')
  signUp() {
    return this.authService.signUp();
  }

  @Post('login')
  async loginGoogle(@Body('token') token: string) {
    try {
      return await this.userService.loginWithGoogle({ token });
    } catch (e) {
      console.error('[loginGoogle][error] | %s', e);
    }
  }
}
