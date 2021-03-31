const fs = require("fs");

const getStates = require("./utils");

beforeAll(() => {});

beforeEach(() => {});

afterAll(() => {});

afterEach(() => {});

test("data file exists", () => {
  expect(fs.existsSync("./data.json")).toBe(true);
});

test("function returns states", () => {
  const states = [
    "Alaska",
    "Colorado",
    "Massachusets",
    "Columbia",
    "California",
    "Illinois",
    "New York",
    "Michigan",
    "Hawaii",
    "Washington",
    "Nebraska",
    "Texas",
    "North Carolina",
    "South Carolina",
    "Florida",
    "Arizona",
    "Pennsylvania",
    "Georgia",
    "Alabama",
    "Minnesota",
    "New Mexico",
  ];
  expect(getStates()).toStrictEqual(states);
});
