import React from "react";

export default function ThemeSwitcher() {

    function changeTheme() {
        const node = document.querySelector('html')
        const prevTheme = node.dataset.theme

        if (prevTheme === 'light')
            node.dataset.theme = 'dark'
        else
            node.dataset.theme = 'light'

        return node
    }

    return <article>
        <hgroup>
            <h3>Theme</h3>
            <h5>Change the theme of the website.</h5>
        </hgroup>
        <fieldset>
            <label htmlFor="switch">
                <input type="checkbox" id="switch" name="switch" role="switch" onChange={changeTheme}/>
                Switch Theme
            </label>
        </fieldset>
    </article>
}

