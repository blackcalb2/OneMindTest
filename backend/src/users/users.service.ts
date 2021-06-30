import { Injectable } from '@nestjs/common';
import userDataFile from './users';
import { union } from 'lodash';

type userNameDto = {
  id: string;
  name: string;
  points: number;
};

@Injectable()
export class UsersService {
  private readonly userData = userDataFile;

  getAnimalList(): string[] {
    return userDataFile
      .reduce((acum, user) => {
        return union(acum, user.animals);
      }, [])
      .sort();
  }

  getUsersByAnimals(animalName: string): userNameDto[] {
    return this.userData
      .filter((user) => user.isActive)
      .filter((user) => user.animals.includes(animalName))
      .map((user) => ({
        id: user.id,
        name: `${user.name.given} ${user.name.surname}`,
        points: user.points,
      }))
      .sort((userA, userB) => {
        if (userA.points === userB.points) return 0;
        if (userA.points <= userB.points) return 1;
        return -1;
      });
  }
}
