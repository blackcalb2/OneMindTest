import { Injectable } from '@nestjs/common';
import userDataFile from './users';
import { union } from 'lodash';

type userNameDto = {
  id: string;
  name: string;
  points: number;
};

@Injectable()
export class DataService {
  private readonly data = userDataFile;

  getAnimalList(): string[] {
    return this.data
      .reduce((acum, user) => {
        return union(acum, user.animals);
      }, [])
      .sort();
  }

  getAnimalRank() {
    const animalList = this.getAnimalList();
    const count = animalList.reduce((acc, animalName) => {
      acc[animalName] = this.getUsersByAnimals(animalName).length;
      return acc;
    }, {});
    return animalList
      .map((animal) => {
        return { name: animal, count: count[animal] };
      })
      .sort((valA, valB) => valB.count - valA.count)
      .slice(0, 5);
  }

  getUsersByAnimals(animalName: string): userNameDto[] {
    return this.data
      .filter((user) => user.isActive)
      .filter((user) => user.animals.includes(animalName))
      .map((user) => ({
        id: user.id,
        name: `${user.name.given} ${user.name.surname}`,
        points: user.points,
        age: user.age,
      }))
      .sort((userA, userB) => {
        if (userA.points === userB.points) return 0;
        if (userA.points <= userB.points) return 1;
        return -1;
      });
  }

  getUserInfo() {
    const totalUsers = this.data.length;
    const activeUsers = this.data.filter((user) => user.isActive).length;
    return {
      activeUsers,
      totalUsers,
    };
  }
}
