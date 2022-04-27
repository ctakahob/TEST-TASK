const maxPeoples = 10;
const stringWithDuplicates =
  "cat,dog,cow,snake,cat,dog,bird,cow,elefant,pantera,cat,hourse,hourse";
const distance = 100;

function turtile(finallyDistance) {
  let day = 1;
  const dayDistance = 50;
  const rolling = 30;

  for (let distance = 0; distance <= finallyDistance; distance += dayDistance) {
    if (distance) {
      distance -= rolling;
      ++day;
    } else {
      continue;
    }
  }
  return day;
}

function handshake(maxPeoples) {
  let handshakes = 0;
  let peoplesCount = 1;

  while (peoplesCount < maxPeoples) {
    ++peoplesCount;
    handshakes += peoplesCount - 1;
  }
  return handshakes;
}

function longString(string) {
  return Array.from(new Set(string.split(","))).toString();;
}

console.log("final day is", turtile(distance));
console.log("Handshake count is", handshake(maxPeoples));
console.log("String without dupes", longString(stringWithDuplicates));
