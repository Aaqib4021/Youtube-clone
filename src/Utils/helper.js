var nameList = [
  "John",
  "Jane",
  "Alex",
  "Emily",
  "Michael",
  "Sarah",
  "David",
  "Emma",
  "Daniel",
  "Olivia",
  "James",
  "Sophia",
  "William",
  "Ava",
  "Benjamin",
  "Mia",
  "Lucas",
  "Isabella",
  "Henry",
  "Charlotte",
  "Alexander",
  "Amelia",
  "Ethan",
  "Harper",
  "Jackson",
  "Evelyn",
  "Mason",
  "Abigail",
  "Noah",
  "Lily",
  "Logan",
  "Zoe",
  "Jacob",
  "Grace",
  "Levi",
  "Chloe",
  "Caleb",
  "Ella",
  "Samuel",
  "Victoria",
  "Owen",
  "Nora",
  "Ryan",
  "Scarlett",
  "Luke",
  "Hannah",
  "Jack",
  "Madison",
  "Nathan",
  "Aria",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
