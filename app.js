const messages = [
  "Your limitation—it’s only your imagination",
  "Push yourself, because no one else is going to do it for you",
  " Sometimes later becomes never. Do it now",
  "Great things never come from comfort zones",
  "Dream it. Wish it. Do it",
  "Success doesn’t just find you. You have to go out and get it",
  "The harder you work for something, the greater you’ll feel when you achieve it",
  "Dream bigger. Do bigger",
  "Don’t stop when you’re tired. Stop when you’re done",
  "Wake up with determination. Go to bed with satisfaction",
  "Do something today that your future self will thank you for",
  "Little things make big days",
  "It’s going to be hard, but hard does not mean impossible",
  "Don’t wait for opportunity. Create it",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths",
  "The key to success is to focus on goals, not obstacles",
  "Dream it. Believe it. Build it",
];

const names = [
  "Boo",
  "Mouse",
  "Munchkin",
  "Bee",
  "Dolly",
  "Precious",
  "Bug",
  "Chipmunk",
  "Dottie",
  "Cutie Pie",
  "Bonny Lass",
  "Sweetums",
  "Toots",
  "Buttercup",
  "Lovey",
  "Nugget",
  "Smiley",
];

const emojis = [
  "🍕",
  "🍪",
  "🍘",
  "😎",
  "🏇",
  "🗿",
  "🔺",
  "🏝",
  "🍋",
  "🐉",
  "🌵",
  "🌛",
  "🙉",
  "👹",
  "🏜",
  "📫",
  "👵",
];

function randomNum() {
  return Math.floor(Math.random() * Math.floor(16));
}

const randMessage = messages[randomNum()];
const randName = names[randomNum()];
const randEmoji = emojis[randomNum()];

const finalMessage = `Hey ${randName}! ${randMessage} ${randEmoji}`;

console.log(finalMessage);
