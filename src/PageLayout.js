import { Navigate, Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const PageLayout = ({ user, onLogout }) => {
    if (!user) {
        return <Navigate to='/login' />;
    }

    return <div>
        <Navigation user={user} onLogout={onLogout} />
        Page Layout
        <Outlet />
        </div>;
}