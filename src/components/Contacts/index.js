import styles from './Contacts.module.scss';

function Contacts () {
	return (
		<>
<a href="tel:+75555555555" className={styles.phone}>+7 555 555-55-55</a>
<ul className={styles["social-links"]}>
	<li><a href="/" className={`${styles["icon-telegram"]} ${styles.icon}`}></a></li>
	<li><a href="/" className={`${styles["icon-viber"]} ${styles.icon}`}></a></li>
	<li><a href="/" className={`${styles["icon-whatsapp"]} ${styles.icon}`}></a></li>
</ul>
		</>
	);
}

export default Contacts;