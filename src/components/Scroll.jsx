import React from 'react'

const Scroll = props => (
    <div style={{'overflow-y': 'scroll', 'height': '336px'}}>
        {props.children}
    </div>
)

export default Scroll