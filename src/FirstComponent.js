import React, {Component} from 'react';

export default class FirstComponent extends Component {
constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Text from Element created by Chandan</div>)
    return (<div className="comptext">
    <h5>First Component</h5>
        {this.props.displaytext}
        {element}
    </div>)
    }
}
