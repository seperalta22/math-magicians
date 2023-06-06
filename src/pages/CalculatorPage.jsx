import Calculator from '../components/Calculator';
import styles from '../styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <>
    <div className={styles.container}>
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </div>
  </>
);

export default CalculatorPage;
