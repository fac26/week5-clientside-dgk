import styles from './Button.module.css';

const Button = props => {
    const customClasses = props.classes;
    const classes = `${styles.button} ${styles[customClasses]}`
    
    return (
    <button className={classes} id={props.id} onClick = {props.click}>{props.children}</button>
    )
}

export default Button; 