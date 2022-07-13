import { Modal } from '../components/Modal';
import { useStorageListener } from './useStorageListener';
import style from './ChangeAlert.module.scss';
import buttonStyle from '../Button/CreateButton.module.scss';

export const ChangeAlert = ({ syncronized }) => {
	/* With hocks this send how props */
	const { show, toggleShow } = useStorageListener(syncronized);

	if (show) {
		return (
			<Modal kind={true}>
				<div className={style.altertContainer}>
					<h3>There are changes in localStorage</h3>
					<button
						onClick={() => toggleShow(false)}
						className={buttonStyle.standardButton}
					>
						Reload State
					</button>
				</div>
			</Modal>
		);
	}

	return null;
};

// export const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);
