export const UserDetails = ({ name, isOnline }) => {

    if (isOnline) {
        return (
            <div>
                <h3>{name}</h3>
                <p>Status:{isOnline}</p>
            </div>);
    }
    return (
        <div>
            <h3>{name}</h3>
            <p>Status:{isOnline}</p>
            contact later
        </div>
    )

};