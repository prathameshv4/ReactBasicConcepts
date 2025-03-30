import React from 'react';

function Props(props) {
    console.log('props - ', props)
    const params = props.params
    return (
        <div>
            <h2>student name = {params.name}</h2>
            <h2>student email = {params.email}</h2>
            <button onClick={() => params()}>call app function </button>
        </div>
    )
}

export default Props;

export class PropsClassComp extends React.Component {

    render() {
        return (
            <div>
                <h2>student name = {this.props.name}</h2>
            </div>
        )
    }
}