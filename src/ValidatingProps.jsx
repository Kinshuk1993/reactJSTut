import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ValidatingProps extends Component {
    render() {
        return (
            <div className="App App-header">
                <h4>
                    Array: {this.props.propArray} <br/>
                    Boolean: {this.props.propBool ? "True" : "False"} <br/>
                    Function: {this.props.propFunc(3)} <br/>
                    Number: {this.props.propNumber} <br/>
                    String: {this.props.propString} <br/>
                    Object: {this.props.propObject.obj1} <br/>
                    Object: {this.props.propObject.obj2} <br/>
                    Object: {this.props.propObject.obj3} <br/>
                </h4>
            </div>
        );
    }
}

ValidatingProps.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string.isRequired,
    propObject: PropTypes.object
};

ValidatingProps.defaultProps = {
    propArray: [1,2,3],
    propBool: false,
    propFunc: function(x){console.log("Number passed in function: " + x); return x},
    propNumber: 10,
    propString: "String testing using default props",
    propObject: {
        obj1: 'One',
        obj2: 'Two',
        obj3: 'Three'
    }
};

export default ValidatingProps;