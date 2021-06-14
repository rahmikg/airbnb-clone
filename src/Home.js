import React from 'react';
import "./Home.css";
import Banner from './Banner';
import Card from "./Card";

function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className="home__section">
            <Card src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/234770343.jpg?k=58fde865d8e7b9e2943041ffd5e64768f543c4f92908a6b8abfd5a604883ca41&o=&hp=1"
                title="Crowne Plaza Resort Asheville, an IHG Hotel "
                description="Crowne Plaza Resort Asheville, an IHG Hotel."
                price="$115/night"/>
                
                <Card src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/196704050.jpg?k=ac4c812bb8fcbf325ff1738c7661084b4e21ab297ff21e70a10c750aa22a8c8b&o=&hp=1"
                title="Bull Creek Road Home"
                description="The holiday home features 2 bedrooms, 
                a TV with satellite channels, 
                an equipped kitchen with a dishwasher and a microwave, 
                and 2 bathrooms with a shower."
                price="$120/night"/>
                
                <Card src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/274150491.jpg?k=cca4068daa794b4b4ecf81abf569680fcb08ead5528c635d1605ae42dc6e9465&o=&hp=1"
                title="Lavish Retreat with Hot Tub - Near Asheville, Skiing home "
                description="CLocated in Asheville in the North Carolina region, 
                Lavish Retreat with Hot Tub - Near Asheville, 
                Skiing home has a patio."
                price="$189/night"/>
            </div>

            <div className="home__section">
            <Card src="https://a0.muscache.com/im/pictures/79f9e099-8e91-4e33-a693-d93a12a50b36.jpg?im_w=960"
                title="Entire cabin hosted by Claire "
                description="The Cabin is clean, new construction, 
                has a warm wooden interior, 
                a porch and two decks with river/mountain views, 
                and a wood stove in addition to central heat/ac for maximum coziness."
                price="$210/night"/>
                
                <Card src="https://a0.muscache.com/im/pictures/71420850/6d5f9063_original.jpg?im_w=960"
                title="Modern Cabin with Hot TubThe Cabins at Sho "
                description="This rustic, modern cabin sits on 22 acres of wooded creekside property 
                in the beautiful Shope Creek area of east Asheville."
                price="$89/night"/>
                
                <Card src="https://a0.muscache.com/im/pictures/8a8e8bef-98b2-44d8-be9a-662007ec6fb3.jpg?im_w=960"
                title="Panama City Beach - Clean, Comfortable & Efficient"
                description="Panama City Beach - Clean, Comfortable & Efficient."
                price="$215/night"/>
                
            </div>
        </div>
    )
}

export default Home
