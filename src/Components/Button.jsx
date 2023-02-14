const Button = props => {
    const classes = `button ${props.classes}`
    
    return (
    <button className={classes} onClick = {props.click}>{props.children}</button>
    )
}

export default Button; 