const en = require("./enhancer.js");

describe("Repair Method", () => {
  let itemToBeRepaired = {
    originalName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 90,
    enhancement: 0
  };

  let itemRepaired = {
    originalName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 100,
    enhancement: 0
  };

  //   let itemToBeRepairedIncorrectType = {
  //     originalName: "Sword",
  //     name: "Sword",
  //     type: "wrong",
  //     durability: 90,
  //     enhancement: 0
  //   };

  test("repairs item", () => {
    expect(en.repair(itemToBeRepaired)).toEqual(itemRepaired);
  });
});

//   test("Incorrect Item Type", () => {
//     expect(() => {
//       en.repair(itemToBeRepairedIncorrectType);
//     }).toThrow();
//   });

describe("Enhance Success Method", () => {
  let item = {
    originalName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 90,
    enhancement: 1
  };

  let itemSuccess = {
    originalName: "Sword",
    name: "[+2] Sword",
    type: "weapon",
    durability: 90,
    enhancement: 2
  };

  test("enhance success", () => {
    expect(en.success(item)).toEqual(itemSuccess);
  });
});
