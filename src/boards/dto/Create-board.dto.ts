import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() //핸들러 레벨 파이프
  title: string;

  @IsNotEmpty()
  description: string;
}
