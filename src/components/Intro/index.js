import { useMatchMedia } from "../../hooks/use-match-media";
import styles from './Intro.module.scss'
import Btn from '../Button'
import Bg from './EffectsBg'

function Intro() {
	const { isMobile, isDesktop } = useMatchMedia();
	return (
		<>
			<section className={styles.section}>
				<Bg />
				<div className={styles.intro}>
					<div className={styles.container}>
						<div className={styles['intro-item']}>
							<h1>Зарабатывайте<br /> больше<br /><strong><span>с</span> WELBEX</strong></h1>
							<p className={styles.tagline}>Развиваем и контролируем<br />продажи за вас</p>
						</div>
						<div className={styles['intro-item']}>
							<h2>Вместе с <strong>бесплатной<br />консультацией</strong> мы дарим:</h2>
							<ul className={styles['intro-promotion']}>
								{isDesktop && <><li>
									<h3>Виджеты</h3>
									<p>30 готовых решений</p>
								</li>
									<li>
										<h3>Dashboard</h3>
										<p>с показателями
											вашего бизнеса</p>
									</li>
									<li>
										<h3>Skype Аудит</h3>
										<p>отдела продаж и CRM системы</p>
									</li>
									<li>
										<h3>35 дней</h3>
										<p>использования CRM</p>
									</li></>}
								{isMobile && <>
									<li><h3>Skype Аудит</h3></li>
									<li><h3>30 виджетов</h3></li>
									<li><h3>Dashboard</h3></li>
									<li><h3>Месяц аmoCRM</h3></li>
								</>}
							</ul>
							{isDesktop && <Btn text='Получить консультацию' />}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro;


