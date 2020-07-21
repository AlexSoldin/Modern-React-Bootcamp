function getMood(){
    const moods = ['Angry', 'Happy', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1>JSX Demo</h1>
                <img src="https://images.unsplash.com/photo-1595277574875-11d578dc42da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <h2>My current mood is {getMood()}</h2>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));