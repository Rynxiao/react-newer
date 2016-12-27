/**
 * 调用方式
 * <NodeList>
 *     <span>I'm a NodeList Component's child.</span>
 *     <span>I'm a NodeList Component's child.</span>
 * </NodeList>
 */

import React from 'react';

export default React.createClass({
    render() {
        console.log("this.props.children type", typeof this.props.children);
        console.log("this.props.children type Array?", Object.prototype.toString.call(this.props.children));
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});