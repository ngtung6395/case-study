

let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 2400, 0, 200, 100, 90);

                break;
            case "Human-Mage":
                player = new Player(classType, 1800, 0, 100, 150, 200);
                break;
            case "Wizzard":
                player = new Player(classType, 1650, 0, 50, 200, 50);
                break;
            case "God":
                player = new Player(classType, 1500, 0, 50, 200, 100);
                break;
            case "Assasin":
                player = new Player(classType, 2100, 0, 80, 250, 150);
                break;
            default:
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/player/' +
            classType.toLowerCase() + '.png" class="player"><div><h3>' + classType + '</h3>' +
            '<p class="health-player">Health: ' + player.health + ' </p><p>Mana: ' + player.mana + ' </p>' +
            '<p>Strength: ' + player.strength + ' </p><p>Agility: ' + player.agility + ' </p>' +
            '<p>Speed: ' + player.speed + ' </p></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" ' +
            'onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        let enemy00 = new Enemy("Demon", 2500, 0, 150, 100, 130);
        let enemy01 = new Enemy("Undead", 3000, 0, 110, 130, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;

                break;
        }

        getHeader.innerHTML = '<p> Choose your move </p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" ' +
            'onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/enemy/' + enemy.enemyType.toLowerCase() + '.png" ' +
            'alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3>' +
            '<p class="enemy-health">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p>' +
            '<p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p>' +
            '<p>Speed: ' + enemy.speed + '</p></div>';
        }

}