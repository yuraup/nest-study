import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    //모든 게시물을 가져오는 핸들러
    return this.boardsService.getAllBoards();
  }
}
