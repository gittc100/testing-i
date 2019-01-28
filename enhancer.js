module.exports = {
  success,
  fail,
  repair
};

function typeCheck(item) {
  if (item.type !== "weapon" && item.type !== "armor") {
    throw new Error(`Incorrect Item Type of ${item.type}`);
  }
}

function enhancementCheck(item) {
  let next = item.enhancement;
  next += 1;
  console.log(next);
  if (next > 20) {
    throw new Error("Item Enhancement is at a maximum");
  } else {
    item.enhancement += 1;
    let name = item.originalName;
    switch (next) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        item.name = `[+${next}] ${name}`;
        break;
      case 16:
        item.name = `[PRI] ${name}`;
        break;
      case 17:
        item.name = `[DUO] ${name}`;
        break;
      case 18:
        item.name = `[TRI] ${name}`;
        break;
      case 19:
        item.name = `[TET] ${name}`;
        break;
      case 20:
        item.name = `[PEN] ${name}`;
        break;
    }
  }
}

function success(item) {
  typeCheck(item);
  enhancementCheck(item);
  console.log(item);
  return item;
}

function fail(item) {}

function repair(item) {
  typeCheck(item);
  item.durability = 100;
  return item;
}
