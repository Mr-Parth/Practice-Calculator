import React, {Component} from 'react';

class Result extends Component {

    render(){
        return (
            <div className="input" id="input">{this.props.result}</div>
        );
    }

};

export default Result;
