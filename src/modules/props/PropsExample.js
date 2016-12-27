/**
 * 调用方式
 * <PropsExample name="ryn" message="hello" />
 */

import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="App">
                My name is {this.props.name}, and I say {this.props.message}!
            </div>
        );
    }
});