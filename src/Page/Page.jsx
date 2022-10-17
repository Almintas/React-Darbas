export const Page = ({title = 'Default page', children}) => {
    return (
        <>
        <h1>{title ? title : 'Default page title'} </h1>
        {children}
        </>
    )
};