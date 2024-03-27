import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OAuth2Client } from 'google-auth-library';
import { AuthService } from './auth.service';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

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

  @Post('login')
  async loginGoogle(@Body('token') token: string): Promise<any> {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      console.log('[loginGoogle]', ticket.getPayload());
    } catch (e) {
      console.error('[loginGoogle][error] | %s', e);
    }
  }
}
