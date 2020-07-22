class App extends React.Component {
    render(){
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    img="https://media3.giphy.com/media/ASd0Ukj0y3qMM/200.gif?cid=ecf05e47c5g8lvsk8umqkc964shc6jyaec4pv7yvuaah1qvr&rid=200.gif"
                />
                <Hello 
                    to="Chunky" 
                    from="Other Chunky"
                    bangs={10}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));