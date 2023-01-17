import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; //private = 다른 컴포넌트에서 접근 방지

  getAllBoards() {
    return this.boards;
  }
}
