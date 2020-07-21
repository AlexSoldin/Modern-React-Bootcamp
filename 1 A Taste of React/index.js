class Hello extends React.Component {
    render(){
        return ( // Can only return one thing --> wrap in div component
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello/>, document.getElementById("root"));