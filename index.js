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

function summonCaptainPlanet(planeteerCalls){
  var newPlaneteerCalls = [];
  var i = 0;
  for (i = 0; i < planeteerCalls.length; i++) {
    newPlaneteerCalls.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newPlaneteerCalls;
}

function longPlaneteerCalls(words) {
  var check = []
  var i = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      check.push(true);
    } else {
      check.push(false);
    }
  }
  for (i = 0; i < check.length; i++) {
    if (check[i] === true) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  var i = 0;
  var j = 0;
  for (i = 0; i < foods.length; i++) {
    for (j = 0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return foods[i];
      }
    }  
  }
  return 'no cheese!'
}
