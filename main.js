const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Please provide exactly two file path segments.");
  process.exit(1);
}
const [seg1, seg2] = args;

const joinedPath = path.join(seg1, seg2);

console.log(joinedPath);

// TODO: Use path.join to join two file path segments

// TODO: Print the resulting path to the console
