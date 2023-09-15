const { MathUtils, obj, sayHelloWorld } = require("../index .js");

describe("MathUtils fun", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });

  it("test sum inside MathUtils", () => {
    expect(math1.sum(2, 3)).toEqual(5);
    expect(math1.sum(2, 3)).toEqual(jasmine.any(Number));
    expect(math1.sum(2, 3)).toBe(5);
  });
  it("test checkPositivity", () => {
    expect(math1.checkPositivity(4)).toBeTruthy();
    expect(math1.checkPositivity(-4)).toBeFalsy();
  });
  it("test throw error if two args only", () => {
    expect(() => math1.sum(4, 4, 3)).toThrow(
      new TypeError("Please enter two Args")
    );
  });
  it("test throw error if two args not numbers", () => {
    expect(() => math1.sum("f", 3)).toThrow(
      new TypeError("Please enter two numbers")
    );
  });

  it("test throw error if two args only", () => {
    expect(() => math1.substract(4, 4, 3)).toThrow(
      new TypeError("Please enter two Args")
    );
  });
  it("test throw error if two args not numbers", () => {
    expect(() => math1.substract("f", 3)).toThrow(
      new TypeError("Please enter two numbers")
    );
  });

  it("test throw error if two args only", () => {
    expect(() => math1.multiply(4, 4, 3)).toThrow(
      new TypeError("Please enter two Args")
    );
  });
  it("test throw error if two args not numbers", () => {
    expect(() => math1.multiply("f", 3)).toThrow(
      new TypeError("Please enter two numbers")
    );
  });
  it("test throw error if two args only", () => {
    expect(() => math1.divide(4, 4, 3)).toThrow(
      new TypeError("Please enter two Args")
    );
  });
  it("test throw error if two args not numbers", () => {
    expect(() => math1.divide("f", 3)).toThrow(
      new TypeError("Please enter two numbers")
    );
  });

  it("test throw error if negative numbers", () => {
    expect(() => math1.factorial(-4)).toThrow(
      new TypeError("There is no factorial for negative numbers")
    );
  });

  it("test throw error if two args not numbers", () => {
    expect(() => math1.factorial(3, 4)).toThrow(
      new TypeError("Please enter one Args")
    );
  });
});

it("study dtest iff btn toEqual and tobe", () => {
  var user = { id: 1 };
  var a = { x: user };
  var b = { x: user };
  expect(a).toEqual(b); //? check value only
  //   expect(a).toBe(b) //? check ref and value
});

//? service /////////////////////////////////////////////////////////////////////
describe("study spyOn", () => {
  it("spyOn hello", () => {
    spyOn(obj, "hello");
    sayHelloWorld(obj);
    sayHelloWorld(obj);
    expect(obj.hello).toHaveBeenCalled();
    // expect(obj.hello).toHaveBeenCalledOnceWith(3)
    expect(obj.hello).toHaveBeenCalledTimes(2);
  });
});

//? /////////////////////////////////
describe("create custom matcher", () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeGreater: function () {
        return {
          compare: function (actual) {
            var result = {};
            result.pass = actual > 100;
            result.message = "actual should be more than 100";
            return result;
          },
        };
      },
    });
  });
  it("test custom matcher", () => {
    expect(200).toBeGreater();
  });
});
//? https://jasmine.github.io/pages/docs_home.html //////////////////////////////////////////////
describe("study clock", () => {
  beforeAll(() => {
    jasmine.clock().install();
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });
  it("test var", () => {
    var x = 5;
    setTimeout(() => {
      x = 10;
    }, 1000);

    expect(x).toEqual(5);
    jasmine.clock().tick(1000);
    expect(x).toEqual(10);
  });
});
