import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{

    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, locality, avgRating, sla } = resData;
    
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(' ,')}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    );
};

export default RestaurantCard;