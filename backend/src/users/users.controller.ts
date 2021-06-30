import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('animal/list')
  async animalList() {
    return this.userService.getAnimalList();
  }

  @Get('animal/top:n/:name')
  async topTenUser(
    @Param('name') name: string,
    @Param('n', ParseIntPipe) n: number,
  ) {
    console.log('n', n);
    return this.userService.getUsersByAnimals(name).slice(0, n);
  }
}
