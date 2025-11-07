import { useState } from 'react'
import './App.css'
import PostAdd from './components/PostAdd'
import PostFilter from './components/PostFilter'
import PostList from './components/PostList'
import CustomButton from './components/UI/button/CustomButton'
import Modal from './components/UI/modal/Modal'
import { usePosts } from './hooks/usePosts'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'BBB React', content: 'BBB Описание' },
		{ id: 2, title: 'AAA React 2', content: 'CCC Описание 2' },
		{ id: 3, title: 'CCC React 3', content: 'AAA Описание 3' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<CustomButton onClick={() => setModal(true)}>
				Создать пост
			</CustomButton>

			<Modal visible={modal} setVisible={setModal}>
				<PostAdd create={createPost} />
			</Modal>

			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title='Список постов 1'
			/>
		</div>
	)
}

export default App
