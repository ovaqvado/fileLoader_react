import './App.css'
import Modal from './components/ModalWindow/Modal'

function App() {
	return (
		<div className='App'>
			<h1 className='title'>
				На данном сайте вы можете сохранить ваши файлы в облаке
			</h1>
			<Modal />
			<button onClick={e => console.log(`${e} hello`)} className='button_load'>
				Загрузить файл
			</button>
		</div>
	)
}

export default App
