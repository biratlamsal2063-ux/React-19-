export const UserDetails = ({ name, isOnline, hideOffline }) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    if (isOnline) {
        return (
            <div>
                <h3>{name}</h3>
                <span>online</span>
                <p>available for chat </p>
                <button>send message</button>
            </div>);
    }
    return (
        <div>
            <h3>{name}</h3>
            <span>offline</span>
            <p>not available for chat </p>
            <small>check back later</small>
        </div>
    );

};