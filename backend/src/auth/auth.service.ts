import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  login(loginDto: LoginDto) {
    const user = this.usersService.findByEmail(loginDto.email);
    const isMatch = user.passwordHash === loginDto.password + 'xxxxx';
    if (!isMatch) {
      throw new UnauthorizedException('パスワードが一致しません');
    }
    // TODO: 実際はここでJWTのアクセストークンを作成する。一旦ダミーを返す
    return {
      accessToken: 'useraccesstoken',
    };
  }

  me(token: string) {
    if (token !== 'useraccesstoken') {
      throw new UnauthorizedException('ログインしてください');
    }
    // TODO: ユーザー情報返すあとで情報足す
    return {
      id: 1,
    };
  }
}
