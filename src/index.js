import React from 'react';
import ReactDOM from 'react-dom';

// hello world
import Hello from './modules/hello-world/Hello';

// index
import App from './modules/index/App';
import './static/css/index.css';

// basic-jsx-precompile
import Precompile from './modules/basic-jsx-precompile/build/Precompile';

// array&object
import ArrayExample from './modules/array&object/ArrayExample';
import ObjectExample from './modules/array&object/ObjectExample';

// this.props
import PropsExample from './modules/props/PropsExample';
import NodeList from './modules/props/NodeList';

// PropTypes
import PropTypesExample from './modules/prop-types/PropTypesExample';
import DefaultPropsExample from './modules/prop-types/DefaultPropsExample';

// refs
import RefsExample from './modules/refs/RefsExample';

// event
import EventExample from './modules/event/EventExample';

// state
import StateExample from './modules/state/StateExample';

// form
import FormExample from './modules/form/FormExample';

ReactDOM.render(
    <FormExample />,
    document.getElementById('root')
);
