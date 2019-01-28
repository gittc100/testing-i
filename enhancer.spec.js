const en = require("./enhancer.js");

//////////////////////

describe("Repair Method: Success", () => {
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

  test("repairs item", () => {
    expect(en.repair(itemToBeRepaired)).toEqual(itemRepaired);
  });
});

////////////////////////

describe("Repair Method Error: Type", () => {
  let item = {
    originalName: "Sword",
    name: "Sword",
    type: "not weapon",
    durability: 90,
    enhancement: 0
  };

  test("Type Incorrect", () => {
    () => {
        expect(en.repair(item)).toThrow();
    };
  });
});

/////////////////////////////

describe("Enhance Method: Success", () => {
  let item = {
    originalName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 90,
    enhancement: 15
  };

  let itemSuccess = {
    originalName: "Sword",
    name: "[PRI] Sword",
    type: "weapon",
    durability: 90,
    enhancement: 16
  };

  test("Enhance Success", () => {
    expect(en.success(item)).toEqual(itemSuccess);
  });
});

///////////////////////////////

describe("Enhance Method Error: Type", () => {
    let item = {
      originalName: "Sword",
      name: "Sword",
      type: "not weapon",
      durability: 90,
      enhancement: 0
    };
  
    test("Type Incorrect", () => {
      () => {
          expect(en.success(item)).toThrow();
      };
    });
  });

/////////////////////////////////

describe("Enhance Method Error: Maxed Enhancement", () => {
  let item = {
    originalName: "Sword",
    name: "Sword",
    type: "weapon",
    durability: 90,
    enhancement: 20
  };

  it("Maxed Enhancement", () => {
    () => {
      expect(en.success(item)).toThrow();
    };
  });
});

/////////////////////////////////

describe("Enhance Method Error: Durability Low 1", () => {
    let item = {
      originalName: "Sword",
      name: "Sword",
      type: "weapon",
      durability: 18,
      enhancement: 13
    };
  
    it("Durability Minimized 1", () => {
      () => {
        expect(en.success(item)).toThrow();
      };
    });
  });

/////////////////////////////////

describe("Enhance Method Error: Durability Low 2", () => {
    let item = {
      originalName: "Sword",
      name: "Sword",
      type: "weapon",
      durability: -50,
      enhancement: 15
    };
  
    it("Durability Minimized 2", () => {
      () => {
        expect(en.success(item)).toThrow();
      };
    });
  });

////////////////////////

describe("Fail Method Error: Type", () => {
    let item = {
      originalName: "Sword",
      name: "Sword",
      type: "not weapon",
      durability: 90,
      enhancement: 0
    };
  
    test("Type Incorrect", () => {
      () => {
          expect(en.fail(item)).toThrow();
      };
    });
  });

////////////////////////////

describe("Fail Method Error: Enhancement Level", () => {
    let item = {
      originalName: "Sword",
      name: "Sword",
      type: "weapon",
      durability: 90,
      enhancement: 5
    };
  
    test("Enhancement Level is too Low", () => {
      () => {
          expect(en.fail(item)).toThrow();
      };
    });
  });