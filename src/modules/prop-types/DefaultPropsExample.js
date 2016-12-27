/**
 * 调用方式
 * <DefaultPropsExample />
 */

import React from 'react';

export default React.createClass({

    getDefaultProps() {

        console.log("default execute!");

        return {
            name : 'Ryn',
            age : 12
        }
    },

    render() {
        return (
            <div className="App">
                My name is {this.props.name}, {this.props.age} year's old!
            </div>
        );
    }
});