import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //v1 은 버전
import { CreateBoardDto } from './dto/Create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; //private = 다른 컴포넌트에서 접근 방지

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title, // title: title
      description,
      state: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);

    if (!found) {
      //에러 문구 넣어줌
      throw new NotFoundException(`페이지를 찾을 수 없습니다. ${id}`); //
    }

    return found;
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.state = status;
    return board;
  }
}
