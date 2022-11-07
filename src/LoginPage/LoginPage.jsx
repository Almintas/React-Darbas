import { useNavigate } from 'react-router-dom'

const LoginPage = ({ onLogin }) => {
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

export default LoginPage;