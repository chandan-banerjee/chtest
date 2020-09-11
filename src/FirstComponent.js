import React, {Component} from 'react';

export default class FirstComponent extends Component {
constructor(props) {
    super(props)
    }

render() {
    //const element = (<div>Text from non Fn. Element created by Chandan</div>)
    const element = (<h5 style={{ color: 'red' }}>Hello world-Text from non Fn. component created by Chandan</h5>)
    return (<div className="comptext">
        {this.props.displaytext}
        {element}
        <h3 >My First Component</h3>
    </div>)
    }
}
