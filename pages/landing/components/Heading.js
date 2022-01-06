import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <div className={`S_head ${props.headClass}`}>{props.head}</div>
        </div>
    )
}

export default Heading
