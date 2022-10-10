export const Hero = (props) => {
    return (
        <div className="hero">
            <h1>{props.children}</h1>
            <h2>{props.children}</h2>
        </div>
    )
}