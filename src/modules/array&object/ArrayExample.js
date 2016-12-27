import React from 'react';

export default React.createClass({
    render() {

        let arr = ['Lily', 'John', 'Ryn', "Harry"],
            arr2 = [<h1>Lily</h1>, <h1>John</h1>, <h1>Ryn</h1>, <h1>Harry</h1>];

        return (
            <div className="App">
                <p>1. 直接使用，会直接输出</p>
                {arr}
                <p>2. 数组中的元素可以是jsx语法中的元素</p>
                {arr2}
                <p>2. 可使用 [Array.prototype.map] 函数遍历</p>
                <ul>
                    {
                        arr.map((a , i) => {
                            return <li key={'a'+i}>{`Hello, I'm ${a}`}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
});