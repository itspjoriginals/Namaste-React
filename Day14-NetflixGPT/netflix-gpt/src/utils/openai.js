import OpenAI from 'openai';
import { OPENAI_API } from '../utils/constants'

const openai = new OpenAI({
  apiKey: OPENAI_API, 
  dangerouslyAllowBrowser: true,
});

export default openai;