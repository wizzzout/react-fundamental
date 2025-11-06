import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import CustomButton from './components/UI/button/CustomButton'
import CustomInput from './components/UI/input/CustomInput'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'React', content: 'Описание' },
		{ id: 2, title: 'React 2', content: 'Описание 2' },
		{ id: 3, title: 'React 3', content: 'Описание 3' },
	])

	const [post, setPost] = useState({ title: '', content: '' })

	const addNewPost = e => {
		e.preventDefault()
		setPosts([...posts, { ...post, id: Date.now() }])
		setPost({ title: '', content: '' })
	}

	return (
		<div className='App'>
			<form>
				<CustomInput
					placeholder='Название поста'
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
				/>
				<CustomInput
					placeholder='Описание поста'
					value={post.content}
					onChange={e =>
						setPost({ ...post, content: e.target.value })
					}
					type='text'
				/>
				<CustomButton onClick={addNewPost}>Добавить пост</CustomButton>
			</form>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	)
}

export default App
