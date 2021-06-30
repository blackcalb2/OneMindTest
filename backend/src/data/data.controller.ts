import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('animal/list')
  async animalList() {
    return this.dataService.getAnimalList();
  }

  @Get('animal/top:n/:name')
  async topTenUser(
    @Param('name') name: string,
    @Param('n', ParseIntPipe) n: number,
  ) {
    return this.dataService.getUsersByAnimals(name).slice(0, n);
  }
}
