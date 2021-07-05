import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('animal/list')
  async animalList() {
    return this.dataService.getAnimalList();
  }

  @Get('animal/rank')
  async animaRank() {
    return this.dataService.getAnimalRank();
  }

  @Get('animal/top:n/:name')
  async topTenUser(
    @Param('name') name: string,
    @Param('n', ParseIntPipe) n: number,
  ) {
    return this.dataService.getUsersByAnimals(name).slice(0, n);
  }

  @Get('users')
  async getUsersInfo() {
    return this.dataService.getUserInfo();
  }
}
