import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-54-167-168-52.compute-1.amazonaws.com',
  port: 5432,
  username: 'ehzzdrueacebgc',
  password: '5b410d547b1fefe8388936052581df4e4be3dc36b779b235d3b75b42e23c93d7',
  database: 'd26hied6o1m316',
  autoLoadEntities: true,
  synchronize: true,
};
