/**
 * 调用方式
 * <RefsExample />
 */

import React from 'react';

export default React.createClass({

    handleClick() {
        let dom = this.refs.introduce;  // or ReactDOM.findDOMNode(this.refs.introduce)
        console.log("dom", dom);
    },

    render() {
        return (
            <div className="App">
                <div ref="introduce" onClick={this.handleClick}>
                    <span>My name is Ryn, and I say hello!</span>
                </div>

            </div>
        );
    }
});