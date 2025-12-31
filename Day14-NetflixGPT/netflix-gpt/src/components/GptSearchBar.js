import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
        <form className='p-6 m-6 bg-black w-1/2'>
            <input type='text' className='p-4 m-4' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='py-2 px-4 bg-red-600 text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar