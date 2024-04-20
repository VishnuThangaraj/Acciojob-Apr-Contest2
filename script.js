// Opening Ceremony
function OpeningCeremony(callback) {
  console.log("Let the games begin");
  const initialScores = { red: 0, blue: 0, green: 0, yellow: 0 };
  setTimeout(() => {
    Race100M(initialScores, callback);
  }, 1000);
}

// 100 Meter Race
function Race100M(scores, callback) {
  // Random time between 10 and 15 seconds for match result
  const getRandomTime = () => Math.floor(Math.random() * 6) + 10;
  const redTime = getRandomTime();
  const blueTime = getRandomTime();
  const greenTime = getRandomTime();
  const yellowTime = getRandomTime();

  const sortedTimes = [redTime, blueTime, greenTime, yellowTime].sort(
    (a, b) => a - b
  );
  scores[Object.keys(scores)[sortedTimes.indexOf(redTime)]] += 50;
  scores[Object.keys(scores)[sortedTimes.indexOf(blueTime)]] += 25;

  console.log("Race100M results:");
  console.log("Red time:", redTime);
  console.log("Blue time:", blueTime);
  console.log("Green time:", greenTime);
  console.log("Yellow time:", yellowTime);

  console.log(scores);
  setTimeout(() => {
    LongJump(scores, callback);
  }, 3000);
}

function LongJump(scores, callback) {
  const colors = ["red", "blue", "green", "yellow"];
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  scores[selectedColor] += 150;

  console.log(`LongJump: ${selectedColor} wins with 150 points!`);
  console.log(scores);

  setTimeout(() => {
    HighJump(scores, callback);
  }, 2000);
}

function HighJump(scores, callback) {
  const userColor = prompt("Which color secured the highest jump?");
  //   console.log(scores["blue"]);
  if (userColor && scores[`${userColor}`]) {
    scores[`${userColor}`] += 100;
  } else {
    console.log("Invalid Choice Entered... Red Wins by Default");
    scores["red"] += 100;
  }

  console.log(`HighJump: ${userColor} wins with 100 points!`);
  console.log(scores);

  callback(scores);
}

function AwardCeremony(scores) {
  console.log("Final scores:");
  console.log(scores);

  const sortedColors = Object.keys(scores).sort(
    (a, b) => scores[b] - scores[a]
  );
  console.log(
    `Winner: ${sortedColors[0]} with ${scores[sortedColors[0]]} points`
  );
  console.log(
    `Runner-up: ${sortedColors[1]} with ${scores[sortedColors[1]]} points`
  );
  console.log(
    `Third place: ${sortedColors[2]} with ${scores[sortedColors[2]]} points`
  );
}

OpeningCeremony(AwardCeremony);
