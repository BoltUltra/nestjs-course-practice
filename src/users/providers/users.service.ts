import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from './../dtos/get-users-params.dto';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    // Injecting authService
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    gtUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        firstName: 'John',
        email: 'john@email.com',
      },
      {
        firstName: 'Doe',
        email: 'doe@john.com',
      },
    ];
  }

  // Find User by ID
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      email: 'john@email.com',
    };
  }
}
