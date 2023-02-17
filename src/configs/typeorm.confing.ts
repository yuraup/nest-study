import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board-app',
  //Entities: 엔티티를 이용해 DB table을 생성하기 때문에
  // 아래 코드로 엔티티 파일이 어디에 있는지 설정함
  entities: [__dirname + '/../**/'],
  //synchronize: true를 주면 애플리케이션 재실행 시
  //엔티티안에서 수정된 컬럼의 길이 타입 변경값 등을 해당 테이블을 drop 후 다시 생성
  synchronize: true,
};
