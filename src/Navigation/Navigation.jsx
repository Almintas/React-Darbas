import { Link } from 'react-router-dom';


export const Navigation = () => {
    const navigationStyle = {
        backgroundColor: 'orange'
    }

    return (
        <>

        <div style={navigationStyle}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
        </>
    )
}