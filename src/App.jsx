import { useMemo, useState } from 'react'
import './App.css'
import PostAdd from './components/PostAdd'
import PostList from './components/PostList'
import CustomInput from './components/UI/input/CustomInput'
import CustomSelect from './components/UI/select/CustomSelect'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'BBB React', content: 'BBB Описание' },
		{ id: 2, title: 'AAA React 2', content: 'CCC Описание 2' },
		{ id: 3, title: 'CCC React 3', content: 'AAA Описание 3' },
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			)
		}
		return posts
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = sort => {
		setSelectedSort(sort)
	}

	return (
		<div className='App'>
			<PostAdd create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<CustomInput
					placeholder='Поиск...'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<CustomSelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По заголовку' },
						{ value: 'content', name: 'По контенту' },
					]}
				/>
			</div>
			{sortedAndSearchedPosts.length ? (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Список постов 1'
				/>
			) : (
				<h1 style={{ textAlign: 'center' }}>Постов нет</h1>
			)}
		</div>
	)
}

export default App
