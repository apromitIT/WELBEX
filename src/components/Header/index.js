import logo from '../../img/logo_welbex.svg';
import Contacts from '../Contacts'
import { useMatchMedia } from "../../hooks/use-match-media";
import styles from './Header.module.scss';

function Header() {
	const { isMobile, isDesktop } = useMatchMedia();
	return (
		<>
			<header>
				<div className={styles.container}>
					{isDesktop && <div className={styles['main-logo']}><a href='#'> <img
						src={logo}
						height="24"
						width="140px"
						alt="logo"
					/></a>
						<p>крупный интегратор CRM<br /> в Росcии и ещё 8 странах</p></div>}

					<ul className={styles['main-menu']}>
						<li><a href='#'>Услуги</a></li>
						<li><a href='#'>Виджеты</a></li>
						<li><a href='#'>Интеграции</a></li>
						<li><a href='#'>Кейсы</a></li>
						{isDesktop && <li><a href='#'>Сертификаты</a></li>}
					</ul>
					{isDesktop && <div className={styles['header-contacts']}>
						<Contacts />
					</div>}

				</div>
			</header>
		</>
	);
}

export default Header;