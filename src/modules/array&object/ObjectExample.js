import React from 'react';

export default React.createClass({
    render() {

        let obj = {name : 'Ryn', 'message' : 'hello'};

        return (
            <div className="App">
                My name is {obj.name}, and I say {obj.message}!
            </div>
        );
    }
});