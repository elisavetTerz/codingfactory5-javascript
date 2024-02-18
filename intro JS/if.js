let username;

if (username) {
  console.log(username);
} else {
  console.log("Username not found");
}

let n = 10;

if (n) {
  console.log(`You have ${n} messages`);
} else {
  console.log("No messages found");
}

console.log(n ? `You have ${n} messages` : "No messages found");
