import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from './db';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = users;

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      email: createUserDto.email,
      // TODO: ハッシュ化は一旦後回し（一旦変更チェックのために末尾に「xxxxx」をつけておく）
      passwordHash: createUserDto.password + 'xxxxx',
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`対象のユーザーは見つかりませんでした`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`対象のユーザーは見つかりませんでした`);
    }
    const newUser = {
      ...this.users[index],
      email: updateUserDto.email || this.users[index].email,
      // TODO: ハッシュ化は一旦後回し（一旦変更チェックのために末尾に「xxxxx」をつけておく）
      passwordHash:
        updateUserDto.password + 'xxxxx' || this.users[index].passwordHash,
    };
    this.users[index] = newUser;
    return newUser;
  }

  remove(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`対象のユーザーは見つかりませんでした`);
    }
    this.users = this.users.filter((u) => u.id !== id);
  }

  findByEmail(email: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      throw new NotFoundException(`対象のユーザーは見つかりませんでした`);
    }
    return user;
  }
}
