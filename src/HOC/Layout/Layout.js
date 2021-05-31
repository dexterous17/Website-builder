import React from 'react'
import Auxs from '../Auxs/Auxs'

function Layout() {
    return (
        <Auxs>
            <main>
                {this.props.children}
            </main>
        </Auxs>
    )
}

export default Layout
