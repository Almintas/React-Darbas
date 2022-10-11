export const UserGreeting = ({ name }) => {
    if (name) {
        return <h1>Welcome back, {name}</h1>;
    }
    
    return <h1>Welcome back!</h1>;
};