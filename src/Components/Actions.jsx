import Button from './Button.jsx';
import styles from './Actions.module.css';
const Actions = props => {
  const stickHandler = () => {
    props.onStick()  
    console.log("stuck!")
    
  }
  const hitHandler = () => {
    console.log("hit!")
      props.onHit()
  }
  return (
    <div className={styles.actions}>
      <Button id="stick" click={stickHandler} classes='stick'>Stick</Button>
      <Button id="hit" click={hitHandler} classes='hit'>Hit</Button>

    </div>
  );
}

export default Actions;