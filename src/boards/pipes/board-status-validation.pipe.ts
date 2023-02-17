import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';
//status를 다루는 부분은 게시물을 업데이트할 때
export class BoardStatusValidationPipe implements PipeTransform {
  //readonly : 외부 클래스에서 접근은 가능하지만 변경하지 못하도록
  //value: PUBLIC or PRIVATE 처럼  대문자로 바꾸게끔 해야 함

  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    value = value.toUpperCase(); //value가 다 대문자이도록
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    //인덱스 안에 값이 없으면 -1 반환
    return index !== -1;
  }
}
