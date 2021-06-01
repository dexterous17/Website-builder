import React from 'react'

function Content(props) {
    return (
        <main className={props.className}>
            {props.children}
        </main>
    )
}

export default Content
