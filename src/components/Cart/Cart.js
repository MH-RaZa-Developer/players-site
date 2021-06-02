import React from 'react';

const Cart = (props) => {

     console.log(props.player);

     const {name, salary, img} = props.player;

    const cartStyle = {
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        margin: "15px",
        background:"tomato",
        width: "250px"
    }

    return (
        <div style={cartStyle}>
            <img style={{height: "120px", width:"120px", borderRadius:"50%"}} src={img} alt=""></img>
            <h5>Selected player: {props.player.name}</h5>
            <h5>Salary: {salary}</h5>
        </div>
    );
};

export default Cart;