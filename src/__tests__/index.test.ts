import { DotaHeroes } from '../index';
import { Hero } from '../types';

const Instance = new DotaHeroes();

test('Check class instance', () => expect(Instance instanceof DotaHeroes).toBe(true));

test('Load data', async () => {
  const heroes: Hero[] = await Instance.getHeroes();
  expect(heroes.length > 0).toBe(true);
});

test('Make sure that Drow Ranger still have 2 legs', async () => {
  const heroes: Hero[] = await Instance.getHeroes();
  const DrowRanger: Hero = heroes.filter((hero: Hero) => hero.localized_name === 'Drow Ranger')[0];
  expect(DrowRanger.legs).toBe(2);
});
