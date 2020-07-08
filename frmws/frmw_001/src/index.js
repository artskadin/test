import React, {Component as C} from 'react'
import {render as r} from 'react-dom'

class Stater extends C {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    change(v) {
        this.setState(({ value }) => ({ value: v }))
    }

    render() {
        return(
            <div>
                <h1>FRMW_001</h1>
                <h4 id="author" title="GossJS" hidden="">Artem Skadin</h4>
                <input 
                    value={this.state.value} 
                    onChange={({target: {value: v}}) => this.change(v)}
                />
                <input 
                    value={this.state.value} 
                    onChange={({target: {value: v}}) => this.change(v)}
                />
            </div>
        )
    }
}

r(<Stater />, document.querySelector('.cont'))