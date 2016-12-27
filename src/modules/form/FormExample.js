/**
 * 调用方式
 * <FormExample />
 */

import React from 'react';

export default React.createClass({

    getInitialState() {
        return {
            name : 'ryn',
            age : 12
        }
    },

    changeInput(event) {
        this.setState({name : event.target.value});
    },

    changeSelect(event) {
        this.setState({age : event.target.value});
    },

    render() {
        return (
            <div className="App">
                <div>
                    <label htmlFor="name">name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeInput} />
                </div>
                <div>
                    <label htmlFor="age">age:</label>
                    <select value={this.state.age} onChange={this.changeSelect}>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        );
    }
});