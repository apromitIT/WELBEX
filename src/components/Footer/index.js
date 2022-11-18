import Contacts from '../Contacts'
import styles from './Footer.module.scss';
import { useMatchMedia } from "../../hooks/use-match-media";

function Footer() {
	const { isMobile, isDesktop } = useMatchMedia();
	let today = new Date();
	let year = today.getUTCFullYear();
	return (
		<>
			<footer>
				<div className="container">
					<div className={styles["footer-inner"]}>
						<div className={styles["footer-item"]}>
							<h3 className={styles["footer-title"]}>О компании</h3>
							<ul>
								<li><a href='/'>Партнёрская программа</a></li>
								<li><a href='/'>Вакансии</a></li>
							</ul>
						</div>
						<div className={styles["footer-item"]}>
							<h3 className={styles["footer-title"]}>Меню</h3>
							<ul className={styles['footer-menu']}>
								<li><a href='/' >Расчёт стоимости</a></li>
								{isMobile && <><li><a href='/'>Благодарность клиентов</a></li><li><a href='/'>Услуги</a></li><li><a href='/'>Кейсы</a></li></>}

								{isDesktop && <><li><a href='/'>Кейсы</a></li><li><a href='/'>Услуги</a></li><li><a href='/'>Благодарственные письма</a></li></>}

								<li><a href='/' >Виджеты</a></li>
								<li><a href='/' >Сертификаты</a></li>
								<li><a href='/' >Интеграции</a></li>
								<li><a href='/' >Блог на Youtube</a></li>
								<li><a href='/' >Наши клиенты</a></li>
								<li><a href='/' >Вопрос / Ответ</a></li>
							</ul>
						</div>
						<div className={styles["footer-item"]}>
							<h3 className={styles["footer-title"]}>Контакты</h3>
							<Contacts />
							<ul>
								<li>Москва, Путевой проезд 3с1, к 902</li>
							</ul>
						</div>
					</div>
					<div className={styles["copyright"]}>
						<p>&copy;WELBEX {year}. Все права защищены.</p>
						<a href="/">Политика конфиденциальности</a>
					</div>
				</div>
			</footer>

		</>
	);
}

export default Footer;