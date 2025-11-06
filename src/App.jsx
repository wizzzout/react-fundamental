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

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const addNewPost = e => {
		e.preventDefault()
		console.log(title, desc)
	}

	return (
		<div className='App'>
			<form>
				<CustomInput
					placeholder='Название поста'
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
				/>
				<CustomInput
					placeholder='Описание поста'
					value={desc}
					onChange={e => setDesc(e.target.value)}
					type='text'
				/>
				<CustomButton onClick={addNewPost}>Добавить пост</CustomButton>
			</form>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	)
}

export default App
