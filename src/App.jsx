import './App.css'
import PostItem from './components/PostItem'

function App() {
	return (
		<div className='App'>
			<PostItem post={{ id: 1, title: 'React', content: 'Описание' }} />
		</div>
	)
}

export default App
