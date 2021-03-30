let a = [];

class Nhanvat{
    constructor(_classType,_health,_mana,_strength,_agility,_speed) {
        this.classType = _classType;
        this.health = _health;
        this.mana = _mana;
        this.strength = _strength;
        this.agility = _agility;
        this.speed = _speed;
    }

    createPlayer(){
        let player1 = new Nhanvat(Warrior,800,0,150,100,170);
    }
}