
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);


export default async (req, res) => {
    let prompt = `I'm professional hard roaster \nroast my ex\nstatement: ${req.body.what}\nroast: `;
    // let prompt = `I'm profession hard roaster:\nstatement:${req.body.what}\nroast:`;

    // let prompt = `What is ${req.body.product}   and ? Write a creative ad for the following product to run on ${formDataObj.adPlatform} aimed at ${formDataObj.adTarget} :\n\nProduct:${formDataObj.productName}\n\nSocial:${formDataObj.social}\n\nTarget:${formDataObj.target}\n\n`;
    console.log(prompt);
    const gptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.77,
        max_tokens: 23,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    res.status(200).json({ result: `${gptResponse.data.choices[0].text}` })
}




