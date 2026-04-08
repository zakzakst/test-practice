import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // 実際は@UseGuards(AuthGuard('jwt'))を利用するらしいが、一旦ダミー利用する
  @Get('me')
  me(@Req() request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];
    return this.authService.me(token);
  }
}
