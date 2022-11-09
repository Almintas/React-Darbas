import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const darkStyle = {
    backgroundColor: 'black',
    color: 'white'
};

const lightStyle = {
    backgroundColor: 'white',
    color: 'black'
};

const navigationStyle = {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    padding: 20
};


export const Navigation = ({ onLogout }) => {
    const {isDark, changeTheme, themeColor} = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        onLogout()
        navigate('/login');
    }

    const buttonStyle = { backgroundColor: themeColor };

    return (
        <>

        <div style={{...navigationStyle, ...(isDark ? darkStyle : lightStyle) }}>
            <Link to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
            <button style={buttonStyle} onClick={handleLogOut}>Log Out</button>
            <button style={buttonStyle} onClick={changeTheme}>Change Theme</button>
        </div>
        </>
    )
}