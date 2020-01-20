import React, { Component } from 'react';
import Util from '../../util';
import { Redirect } from 'react-router-dom';

export default class Root extends Component {
    render() {
        return ( <Redirect to={Util.queryParams().path || '/'} /> );
    }
}
