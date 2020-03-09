import React, {Component} from 'react';

class Calculator extends Component {

    render(){
        return (
            <div >
                <div className="buttons">
                <div className="operators">
                    <div onClick={this.props.onClick}>+</div>
                    <div onClick={this.props.onClick}>-</div>
                    <div onClick={this.props.onClick}>*</div>
                    <div onClick={this.props.onClick}>/</div>
                </div>
                <div className="leftPanel">
                    <div className="numbers">
                    <div onClick={this.props.onClick}>7</div>
                    <div onClick={this.props.onClick}>8</div>
                    <div onClick={this.props.onClick}>9</div>
                    </div>
                    <div className="numbers">
                    <div onClick={this.props.onClick}>4</div>
                    <div onClick={this.props.onClick}>5</div>
                    <div onClick={this.props.onClick}>6</div>
                    </div>
                    <div className="numbers">
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>2</div>
                    <div onClick={this.props.onClick}>3</div>
                    </div>
                    <div className="numbers">
                    <div onClick={this.props.onClick}>0</div>
                    <div onClick={this.props.onClick}>.</div>
                    <div id="clear" onClick={this.props.reset}>C</div>
                    </div>
                </div>
                <div className="equal" id="result" onClick={this.props.onClick}>=</div>
            </div>
        </div>
        );
    }

};

export default Calculator;
