import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ todoItems }) => {
  return <div>{todoItems.length === 0 && <p className={styles.p}> Welcome to To-DO App</p>}</div>;
};

export default WelcomeMessage;
