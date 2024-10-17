import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // Injecting the UsersService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    // Check user exists
    const user = this.usersService.findOneById('1234');
    // login
    // token
    return 'Sample_Token';
  }

  public isAuth() {
    return true;
  }
}
