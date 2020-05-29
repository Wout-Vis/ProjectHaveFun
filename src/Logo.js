import React from 'react'
import Background from './gfx/logo_s.png'

export default function Logo() {

    var backgroundStyle = {
        backgroundImage: `url(${Background})`
    }

    return (
        <div id="logoBox" style={ backgroundStyle }>
            
        </div>
    )
}