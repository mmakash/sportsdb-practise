import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search,setSearch] = useState('');
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => {
            setPlayers(data?.player);
        });
    },[search])
    // console.log(players);
    const handleDelete = (id) =>{
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
        setCart(leftPlayer);
    }
    return (
        <div>
            <div className="home-container">
            <div className="left-side">
                <input onChange={(e) =>setSearch(e.target.value)} type="text" placeholder='Search..' className='search-input' />
                <button className='search-btn'>Click</button>
                <div className="players-container">
                    <Players 
                    players={players}
                    cart={cart}
                    setCart={setCart}
                    ></Players>
                </div>
            </div>
            <div className="right-side">
               <div className='cart'>
                <p>This is Player Cart</p>
                {cart?.map((p) =>(
                    <div className='cart-info-container'>
                        <li>{p.strPlayer}</li>
                        <button onClick={() =>handleDelete(p.idPlayer)} className='delete-btn'>X</button>
                    </div>
                ))} 
               </div>
            </div>
            </div>
        </div>
    );
};

export default Home;