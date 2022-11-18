import styles from './Button.module.scss';

function Btn(props) {
	const {text = ''} = props;
	return (
<>
<a href="/" className={styles.btn}>{text}

</a>
</>
	);
}

export default Btn;