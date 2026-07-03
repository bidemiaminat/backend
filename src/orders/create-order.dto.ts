import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;   // or email/phone depending on your auth setup

  @IsArray()
  @IsNotEmpty()
  productIds: string[];   // array of product IDs
}

