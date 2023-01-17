import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //v1 은 버전

@Injectable()
export class BoardsService {
  private boards: Board[] = []; //private = 다른 컴포넌트에서 접근 방지

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title, // title: title
      description,
      state: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
