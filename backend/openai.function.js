const OpenAI=require("openai") ;
require("dotenv").config();

const openai = new OpenAI({apiKey:process.env.API_KEY});

async function main(content,type) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `generate a ${content} on ${type}` }],
    model: "gpt-3.5-turbo",
  });

  
  return completion.choices[0].message.content;
}


module.exports={
  main
}
