const { generateResponse } = require("./gemini");

async function test() {
  const reply = await generateResponse(
    "Say hello in one sentence"
  );

  console.log(reply);
}

test();