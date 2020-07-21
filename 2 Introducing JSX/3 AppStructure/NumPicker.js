function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render(){
        const num = getNum();

        let message;
        if (num === 7){
            message = 
            <div>
                <h2>Congrats!</h2>
                <img src="https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.gif?cid=ecf05e47udixcin01a135m1lqdr3d74j0zwmmdbbh65ppo25&rid=giphy.gif" />
            </div>
        }
        else{
            message = <p>Sorry, maybe next time!</p>
        }

        return (
            <div>
                <h1>Your number is {num}</h1>
                {message}
            </div>
        );
    }
}