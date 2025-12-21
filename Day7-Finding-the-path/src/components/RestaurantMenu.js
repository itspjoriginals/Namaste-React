import  { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.766586034316582&lng=75.84711089730263&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null5&catalog_qa=undefined&submitAction=ENTER');

      // const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwo} = resInfo?.cards[5]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[5]?.card?.card?.info; 

  return (

    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwo}</p>
        <h2>Menu</h2>
        <ul>
          {/* {itemCards.map(item => <li>{item.card.info.name}</li>)} */} 
          <li>biryani</li>
          <li>Burgers</li>
          <li>Pizzas</li> 
        </ul>
    </div>
  )
}

export default RestaurantMenu

