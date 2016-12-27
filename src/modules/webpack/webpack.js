import React from 'react';
import ReactDOM from 'react-dom';

const Webpack =  React.createClass({
    render() {
        return (
            <div className="App">
                <h1>Hello world!</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <Webpack />,
    document.getElementById("root")
);