import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({player,cart,setCart}) => {
    // console.log(player);
    const {strPlayer,idPlayer,strCutout} = player;
    const handleAddTocCart = () =>{
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price:115,
        }
        if(cart?.length){
            // const newPlayer = [...cart,info];
            setCart([...cart,info]);
            return;
        }
        else{
            setCart([info]);
            return;
        }
    }
    console.log(cart);
    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            {/* <p>{strDescriptionEN ? strDescriptionEN?.slice(0,40): "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis"}</p> */}
            <button className='card-btn'>Details</button>
            <button onClick={handleAddTocCart} className='card-btn'>Add To Cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;