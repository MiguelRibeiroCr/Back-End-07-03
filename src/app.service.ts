import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class AppService {
 

  private readonly users: User[]=[];
  
  getHello(): string {
    return 'folga nunca chega';
  }
  createUser(user: User): User[]{
    this.users.push(user);
    return this.users;
  }

  getUsers(): User[]{
    return this.users;
  }
}

