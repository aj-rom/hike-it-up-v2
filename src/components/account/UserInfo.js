export const UserInfo = (props) => {

    const { user } = props
    return (
        <article>
            <hgroup>
                <h2>{user.username}</h2>
                <h4>{user.trail_count} Trails</h4>
            </hgroup>
            {/*Trails*/}
            {/*Reviews*/}
        </article>
    )
}