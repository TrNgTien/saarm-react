import { HashService } from '@/helpers';
import { User } from '@/models';
import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'class-validator';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { UserRepository } from './user.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  private readonly client: OAuth2Client;

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UserRepository,
  ) {
    this.client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    );
  }

  isExistedUser(payload: TokenPayload | undefined) {
    try {
      return this.usersRepository.findOne({
        select: [
          'id',
          'email',
          'lastName',
          'firstName',
          'status',
          'lastLoginAt',
          'createdAt',
        ],
        where: {
          email: payload?.email,
        },
      });
    } catch (e) {
      console.log('[isExistedUser] | %s', e);
    }
  }

  signUp() {}

  signIn() {}

  async getGoogleInformation(opts: { token: string }) {
    const { token } = opts;
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      return ticket.getPayload();
    } catch (e) {
      throw Error(`[getGoogleInformation] | ${e}`);
    }
  }

  async loginWithGoogle(opts: { token: string }) {
    const { token } = opts;
    const payload = await this.getGoogleInformation({ token });
    const userFound = await this.isExistedUser(payload);

    if (isEmpty(userFound) || !userFound) {
      throw Error('Not Found User!');
    }

    return userFound;
  }

  async signUpWithGoogle(opts: { token: string }) {
    const { token } = opts;
    const payload = await this.getGoogleInformation({ token });
    const userFound = await this.isExistedUser(payload);

    if (!isEmpty(userFound)) {
      return userFound;
    }

    const hashSvc = new HashService();
    const hashedPassword = hashSvc.encrypt(`${payload?.email}`);
    const newUser: Partial<User> = {
      email: payload?.email,
      username: payload?.email,
      password: hashedPassword,
      firstName: payload?.given_name,
      lastName: payload?.family_name,
    };

    return this.usersRepository.save(newUser);
  }
}
