import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6, { message: 'Password should be minimum 6 characters' })
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
