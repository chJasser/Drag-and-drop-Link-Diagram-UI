import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly id: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly color: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly form: string;
  @ApiProperty({ required: false })
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
  readonly color: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly form: string;
  @ApiProperty({ required: true })
  @IsString()
  readonly link: string;
  @ApiProperty({ required: false })
  @IsString()
  readonly description: string;
}
