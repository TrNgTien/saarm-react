import { User } from '@/models';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuth2Client } from 'google-auth-library';
import { UserRepository } from './user.repository';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@ApiTags('Authentication')
@Controller()
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UserRepository,
  ) {}

  @Get('')
  async getUsers(): Promise<User[] | undefined> {
    try {
      return await this.usersRepository.find();
    } catch (e) {
      console.error('[getUsers][error] | %s', e);
    }
  }

  @Post('login-google')
  async loginGoogle(@Body('token') token: string): Promise<void> {
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

  @Post('register-google')
  async registerGoogle(@Body('token') token: string): Promise<void> {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const isExisted = this.usersRepository.count({
        where: {},
      });

      console.log('[loginGoogle]', ticket.getPayload());
    } catch (e) {
      console.error('[loginGoogle][error] | %s', e);
    }
  }
}
