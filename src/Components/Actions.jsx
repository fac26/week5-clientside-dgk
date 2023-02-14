import Button from './Button.jsx';

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
    <div>
      <Button id="stick" click={stickHandler}>Stick</Button>
      <Button id="hit" click={hitHandler}>Hit</Button>

    </div>
  );
}

export default Actions;