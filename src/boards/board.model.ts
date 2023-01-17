export interface Board {
  id: string;
  title: string;
  description: string;
  state: BoardStatus; //enum
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
