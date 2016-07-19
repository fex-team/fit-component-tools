import React from 'react'
import { Link } from 'react-router'


export default class App extends React.Component {
    render () {
        return (
            <div>
                Helloworld

                <Link to="test">Test</Link>
            </div>
        )
    }
}