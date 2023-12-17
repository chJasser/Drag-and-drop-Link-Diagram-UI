import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly icon: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly color: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly form: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly link: string;
}


export class AddPageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  // readonly icon: string;
  // @ApiProperty({ required: true })
  // @IsNotEmpty()
  // @IsString()
  readonly color: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly form: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly link: string;
}
