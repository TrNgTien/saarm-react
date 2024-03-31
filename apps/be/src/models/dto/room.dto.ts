import { BaseResponseDto } from '@/base/dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RoomDto extends BaseResponseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  monthlyPrice: string;
}
