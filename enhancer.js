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
    if (
      (item.durability < 25 && item.enhancement <= 14) ||
      (item.durability < 10 && item.enhancement > 14 && item.enhancement <= 20)
    ) {
      throw new Error("Item Durability is too Low for Enhancement");
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
}

function checkEnhLevel(item) {
  let type = item.type;
  if (
    (type === "armor" && item.enhancement <= 5) ||
    (type === "weapon" && item.enhancement <= 7)
  ) {
    throw new Error(
      `Failure is impossible Enhancement level too low for item Type: ${type}`
    );
  }
}

function durCheck(item) {
  let enlev = item.enhancement;
  let dur = item.durability;
  let dec = 0;
  if (enlev <= 14) {
    dec = 5;
  } else {
    dec = 10;
  }
  if (dur - dec < 0) {
    throw new Error(`Item Destroyed`);
  } else {
    item.durability -= dec;
  }
}

function decEnhancement(item) {
  if (item.enhancement > 16) {
    item.enhancement -= 1;
    let name = item.originalName;
    let next = item.enhancement;
    switch (next) {
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
  checkEnhLevel(item);
  enhancementCheck(item);
  return item;
}

function fail(item) {
  typeCheck(item);
  durCheck(item);
  decEnhancement(item);
  return item;
}

function repair(item) {
  typeCheck(item);
  item.durability = 100;
  return item;
}
