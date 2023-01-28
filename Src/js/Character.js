export default class Character {
  constructor(name, type) {
    const list = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10 || name === undefined) {
      throw new Error('Длина имени не соответствует условиям');
    }
    if (!list.includes(type)) {
      throw new Error('Не соответствие заданным типам');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
