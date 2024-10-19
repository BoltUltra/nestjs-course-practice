import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }

  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  @Post('/new-post')
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto, 'You sent a POST request to posts endpoint');
  }

  @Patch('/edit-post')
  public patchPost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto, 'You sent a PATCH request to posts endpoint');
  }
}
