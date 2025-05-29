import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Person } from './entities/person.entity';
import { Animal } from './entities/animal.entity';
import { PersonService } from './services/person.service';
import { AnimalService } from './services/animal.service';
import { PersonController } from './controllers/person.controller';
import { AnimalController } from './controllers/animal.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pet_owners',
      entities: [Person, Animal],
      synchronize: true, // À ne pas utiliser en production
    }),
    TypeOrmModule.forFeature([Person, Animal]),
  ],
  controllers: [AppController, PersonController, AnimalController],
  providers: [AppService, PersonService, AnimalService],
})
export class AppModule {
  configure(consumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        if (req.method === 'OPTIONS') {
          res.sendStatus(200);
        } else {
          next();
        }
      })
      .forRoutes('*');
  }
}
