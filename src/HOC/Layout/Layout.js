import React from 'react'
import Auxs from '../Auxs/Auxs'

function Layout(props) {
    return (
        <Auxs>
            <main>
                {props.children}
            </main>
        </Auxs>
    )
}

export default Layout
