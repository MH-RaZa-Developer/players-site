import React from 'react';

const Player = (props) => {

    const {name, img, salary, activities, odi_50s, odi_100s, best_run, strike_rate} = props.info;

    const cardStyle = {
        boxShadow: "0 10px 20px gray",
        height: "350px",
        width: "350px",
        padding: "15px",
        margin: "20px",
        borderRadius: "13px"
    }

    return (
           <div className="col-md-4">
                <div style={cardStyle}>
                <img style={{height: "120px", width:"120px", borderRadius:"50%"}} src={img} alt=""></img>
                <h3>{name}</h3>
                <h4>Salary: {salary}</h4>
                <p>Activities: {activities}</p>
                <button onClick={() => props.handleAdd(props.info)} className="btn btn-primary">Add Player</button>
                </div>
           </div>
    );
};

export default Player;