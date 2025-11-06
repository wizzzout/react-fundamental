import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import CustomButton from './components/UI/button/CustomButton'
import CustomInput from './components/UI/input/CustomInput'

function App() {
	const [posts, setPost] = useState([
		{ id: 1, title: 'React', content: 'Описание' },
		{ id: 2, title: 'React 2', content: 'Описание 2' },
		{ id: 3, title: 'React 3', content: 'Описание 3' },
	])

	return (
		<div className='App'>
			<from>
				<CustomInput placeholder='Название поста' type='text' />
				<CustomInput placeholder='Описание поста' type='text' />
				<CustomButton>Добавить пост</CustomButton>
			</from>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	)
}

export default App
