const Button = props => {
    const classes = `button ${props.classes}`
    
    return (
    <button className={classes}>{props.children}</button>
    )
}

export default Button; 