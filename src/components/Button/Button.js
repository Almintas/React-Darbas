const primaryStyle = {
    backgroundColor: 'blue',
    color: 'white'
};

const seconadryStyle = {
    backgroundColor: 'salmon',
    color: 'black'
}

export const VARIANTS = {
    PRIMARY: 'primary',
    SECONADRY: 'secondary'
}

export const Button = ({ variant, children, disabled }) => {
    let style;
    switch (variant) {
        case VARIANTS.PRIMARY:
            style = primaryStyle;
            break;
        case VARIANTS.SECONADRY:
            style = seconadryStyle;
            break;
    }

    return (
        <button disabled={disabled} style={style}>{children}</button>
    )
}