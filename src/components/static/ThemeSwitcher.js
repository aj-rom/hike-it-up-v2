import React from "react";

export default function ThemeSwitcher() {

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

    return <article>
        <hgroup>
            <h3>Theme</h3>
            <h5>Change the theme of the website.</h5>
        </hgroup>
        <div className='grid'>
            <button onClick={switchToLight} className='outline'>Light</button>
            <button onClick={switchToDark} className='contrast outline'>Dark</button>
        </div>
    </article>
}

