import React from "react";

export default function ThemeSwitcher() {

    const switchToAuto = () => {
        changeTheme('auto')
    }

    const switchToLight = () => {
        changeTheme('light')
    }

    const switchToDark = () => {
        changeTheme('dark')
    }

    function changeTheme(theme) {
        const node = document.querySelector('html')
        node.dataset.theme = theme
        return node
    }

    return <nav className='theme'>
        <ul>
            <li>Theme</li>
            <li><a href='#' onClick={switchToAuto}>Auto</a></li>
            <li><a href='#' onClick={switchToLight}>Light</a></li>
            <li><a href='#' onClick={switchToDark}>Dark</a></li>
        </ul>
    </nav>
}

