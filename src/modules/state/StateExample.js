/**
 * 调用方式
 * <StateExample />
 */

import React from 'react';

export default React.createClass({

    getInitialState() {
        return {
            isRed : true
        }
    },

    componentDidMount() {
        this.inter = window.setInterval(() => {
            this.setState({isRed : !this.state.isRed});
        }, 1000);
    },

    componentWillUnmount() {
        window.clearInterval(this.inter);
    },

    render() {

        let isRed = this.state.isRed, styles;

        styles = isRed ? {
            width : '100px',
            height : '100px',
            backgroundColor : 'red'
        } : {
            width : '100px',
            height : '100px',
            backgroundColor : 'blue'
        };

        return (
            <div className="App">
                <div style={styles}></div>
            </div>
        );
    }
});