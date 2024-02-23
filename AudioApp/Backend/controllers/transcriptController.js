const openai = require('openai');
const apiKey = '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';


const openaiClient = new openai({ apiKey });





exports.transcribeAudio = async (req, res) => {
  const { audioText } = req.body; 

  try {
    
    const processedText = await processTextWithOpenAI(audioText);
    
    res.json({ processedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


async function processTextWithOpenAI(text) {
  
  const response = await openaiClient.complete({
    engine: 'text-davinci-002',
    prompt: text,
    max_tokens: 50
  });

  return response.data.choices[0].text;
}
