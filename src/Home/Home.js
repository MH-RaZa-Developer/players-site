import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import fakeData from '../components/fakeData/players';
import Player from '../components/Player/Player';

const Home = () => {

    const [cart, setCart] = useState([]);

    const handleAdd = (player) =>{
        const oldCart = [...cart, player];
        setCart(oldCart);
    }

    let salarySum = 0;

    for(let i = 0; i < cart.length; i++)
    {
        const player_salary = parseInt(cart[i].salary);
        salarySum += player_salary;
    }

    return (
        <div>
            <h2>Player Added: {cart.length}</h2>
            <h3>Total Salary Badget: {salarySum}</h3>
            <div className="container">
                <div className="row">
                        {
                            cart.map(player => <Cart player={player} />)
                        }
                </div>
            </div>

            <div className="container">
                <div className="row">
                        {
                            fakeData.map(info => <Player handleAdd={handleAdd} info={info} />)
                        }
                </div>
            </div>
        </div>
    );
};

export default Home;