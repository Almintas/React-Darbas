import { UserGreeting } from '../UserGreeting/UserGreeting';
import { GuestGreeting } from '../GuestGreeting/GuestGreeting';
import { LoginButton } from '../LoginButton/LoginButton';
import { LogoutButton } from '../LogoutButton/LogoutButton';

export const Greeting = ({ isLoggedIn, unreadMessages }) => {
    const handleClick = () => {
        alert ('Test')
    };
    
    const handleLogout = () => {
        alert ('You have been Loged out');
    };

    const handleLogin = () => {
        alert ('You have been Loged in');
    };

    return(

        <div>
            {isLoggedIn ? <UserGreeting name={'Almintai'}/> : <GuestGreeting />}
            {isLoggedIn ? <LogoutButton onClick={handleLogout} /> : <LoginButton onClick={handleLogin} />}
            {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages</h2>
            )}

            <button onClick={handleClick}>Test</button>
        </div>
    )
};