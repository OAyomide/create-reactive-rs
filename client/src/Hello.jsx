import React, { Component } from 'react'

const { greet } = await import('../../wasm/pkg')


class HelloWASM extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    async componentDidMount() {
        // load wasm here
    }


    render() {
        return (
            <div>
                <button onClick={e => greet()}>Hello there!</button>
            </div>
        )
    }
}
