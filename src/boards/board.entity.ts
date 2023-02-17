import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() //Board Entity의 기본 키임을 알려주기 위해
  id: number;

  @Column() //Board 엔티티의 title 및 description과 같은 다른 열을 나타냄
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
