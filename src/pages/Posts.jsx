import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import PostAdd from '../components/PostAdd'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import CustomButton from '../components/UI/button/CustomButton'
import Loader from '../components/UI/Loader/Loader'
import Modal from '../components/UI/modal/Modal'
import Pagination from '../components/UI/Pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import { getPageCount } from '../utils/pages'

export default function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)

	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)

	const changePage = page => {
		setPage(page)
	}

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	useEffect(() => {
		fetchPosts()
	}, [page])

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

			{isPostsLoading ? (
				<div className=''>
					<Loader />
				</div>
			) : (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Список постов'
				/>
			)}

			<Pagination
				totalPages={totalPages}
				page={page}
				changePage={changePage}
			/>
		</div>
	)
}
