import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    // We need users service
    // Find a user
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        id: 1,
        title: 'Post 1',
        content: 'Post 1 content',
        userId: userId,
      },
      {
        user: user,
        id: 2,
        title: 'Post 2',
        content: 'Post 2 content',
        userId: userId,
      },
    ];
  }
}
