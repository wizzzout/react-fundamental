import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import CustomButton from './components/UI/button/CustomButton'

function App() {
	const [posts, setPost] = useState([
		{ id: 1, title: 'React', content: 'Описание' },
		{ id: 2, title: 'React 2', content: 'Описание 2' },
		{ id: 3, title: 'React 3', content: 'Описание 3' },
	])

	return (
		<div className='App'>
			<from>
				<input type='text' placeholder='Название поста' />
				<input type='text' placeholder='Описание поста' />
				<CustomButton>Добавить пост</CustomButton>
			</from>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	)
}

export default App
