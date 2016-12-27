/**
 * 调用方式
 * <EventExample />
 */

import React from 'react';

export default React.createClass({

    handleClick(num, e) {
        e.preventDefault();
        console.log("clicked", num);
    },

    render() {
        return (
            <div className="App">
                <div onClick={this.handleClick.bind(this, 1)}>
                    <span>My name is Ryn, and I say hello!</span>
                </div>
            </div>
        );
    }
});