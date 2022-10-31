import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Navigation = ({ onLogout }) => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        onLogout()
        navigate('/login');
    }
    
    
    const navigationStyle = {
        backgroundColor: 'orange'
    }

    return (
        <>

        <div style={navigationStyle}>
            <Link to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
        </>
    )
}