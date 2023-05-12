export function Restaurants(props){
    return(
        <div className='restaurantList'>
            <div key={props.id} className='restaurantCard'>
                <img src={props.image} alt='restaurant-img' className='restaurantImage'></img>
                <div className='restaurantCard_content'>
                    <h3 className='restaurantName'>{props.name}</h3>
                    <div className='restaurantTags'>{props.tags}</div>
                    <div className='leftSide'>
                        <div className='restaurantPrice'>{props.price}</div>
                        <div className='restaurantHours'>{props.hours}</div>
                    </div>
                    <div className='rightSide'>
                        <div className='restaurantRating'>{props.rating}%</div>
                        <div className='restaurantDistance'>{props.distance} mi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}