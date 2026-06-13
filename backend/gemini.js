// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

// const genAI = new GoogleGenerativeAI(
//   process.env.GEMINI_API_KEY
// );

//  const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// async function generateResponse(prompt) {
//   const result = await model.generateContent(prompt);

//   return result.response.text();
// }

// module.exports = { generateResponse };

const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateResponse(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = { generateResponse };