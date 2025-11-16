import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage() {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, postLoading, postError] = useFetching(async id => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})

	const [fetchCommentsById, commentsLoading, commentsError] = useFetching(
		async id => {
			const response = await PostService.getCommentsById(id)
			setComments(response.data)
			console.log(response.data)
		}
	)

	useEffect(() => {
		fetchPostById(params.id)
		fetchCommentsById(params.id)
	}, [])

	return (
		<div>
			<h1>Страница поста ID = {params.id}</h1>

			{postLoading ? (
				<Loader />
			) : (
				<div>
					{post.id} . {post.title}
				</div>
			)}

			{commentsLoading ? (
				<Loader />
			) : (
				comments.map(comment => (
					<div key={comment.id} style={{ marginTop: '15px' }}>
						<h5>{comment.email}</h5>
						<div>{comment.body}</div>
					</div>
				))
			)}
		</div>
	)
}
