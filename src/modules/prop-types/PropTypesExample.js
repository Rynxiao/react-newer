/**
 * 调用方式
 * <PropsTypesExample name="ryn" age="12" />
 */

import React from 'react';

export default React.createClass({

    propTypes : {
        name : React.PropTypes.string.isRequired,
        age : React.PropTypes.number.isRequired
    },

    render() {
        return (
            <div className="App">
                My name is {this.props.name}, {this.props.age} year's old!
            </div>
        );
    }
});