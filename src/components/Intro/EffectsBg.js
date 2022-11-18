import { useMatchMedia } from "../../hooks/use-match-media";
import styles from './Bg.module.scss'

function EffectsBg() {
const { isMobile } = useMatchMedia();
	return (
		<><div className={styles['purple-ball']}></div>
			<div className={styles['red-ball']}></div>
			<div className={styles['red-ball-2']}></div>
			<div className={styles['purple-light']}></div>
			<div className={styles['red-light']}></div>
			{isMobile && <div className={styles['yellow-light']}></div>}
			{isMobile && <div className='noise'></div>}
		</>
	);
}

export default EffectsBg;