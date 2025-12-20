let message = "";

const exclaim = (m) => `${m}!`;

const b = "ma";
function capitalise() {
  message = message[0].toUpperCase() + message.slice(1);
}

function hyphenate(a) {
  return `${a}-${b}`;
}

const question = (message) => message + "y";
message += "me";

capitalise();

for (let i = 0; i < 2; i++) {
  message += "r";
}

message = question(message);

let extra;
if (message.length > 4) {
  extra = hyphenate("X", "mo");
} else {
  extra = hyphenate("ba", "hum");
}

message += " " + extra;

if (!extra.startsWith("ba")) {
  message += "s";
} else {
  message += "bug!";
}

console.log(exclaim(message));
