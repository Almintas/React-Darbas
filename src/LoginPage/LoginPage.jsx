import { useNavigate } from 'react-router-dom'

export const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin()
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}