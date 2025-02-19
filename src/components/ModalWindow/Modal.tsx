import styles from './Modal.module.css'

interface ModalWindow {
	isOpen: boolean
	toggle: () => void
}

export default function Modal() {
	return (
		<div className={styles.modal_box}>
			<div className={styles.modal_content}>
				<button className={styles.btn_close_modal}>
					<img src='/src/assets/image/close_modal.png' alt='close_modal' />
				</button>
				<p className={styles.modal_title}>Загрузочное окно</p>
				<p className={styles.modal_subtitle}>Перед загрузкой дайте имя файлу</p>
				<input
					className={styles.modal_input}
					type='text'
					placeholder='Название файла'
				/>
				<div className={styles.drag_file_modal}>
					<img src='/src/assets/image/docs_pic.png' alt='docs_pic' />
					<p className={styles.text_drag_file}>
						Перенесите ваш в файл в область ниже
					</p>
				</div>
				<button disabled className={styles.load_file_modal}>
					Загрузить
				</button>
			</div>
		</div>
	)
}
