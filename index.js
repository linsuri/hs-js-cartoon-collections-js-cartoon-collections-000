function dwarfRollCall(dwarves) {
  var i = 0;
  var str = '';
  var num = i + 1;
  for (i = 0; i < dwarves.length; i++) {
    str = str + num + '. ' + dwarves[i] + ' ';
    num++
  }
  return str;
}

var newPlaneteerCalls = [];
function summonCaptainPlanet(planeteerCalls){
  var i = 0;
  for (i = 0; i < planeteerCalls.length; i++) {
    newPlaneteerCalls.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newPlaneteerCalls;
}

function longPlaneteerCalls(words) {
  var i = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  var i = 0;
  for (i = 0; i < foods.length; i++) {
    if (foods[i] === cheese[0]) {
      return foods[i];
    } else if (foods[i] === cheese[1]) {
      return foods[i];
    } else if (foods[i] === cheese[2]) {
      return foods[i];
    }
  }
  return 'no cheese!'
}
