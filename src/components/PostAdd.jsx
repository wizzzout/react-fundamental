import { useState } from 'react'
import CustomButton from './UI/button/CustomButton'
import CustomInput from './UI/input/CustomInput'

export default function PostAdd({ create }) {
	const [post, setPost] = useState({ title: '', content: '' })

	const addNewPost = e => {
		e.preventDefault()

		const newPost = { ...post, id: Date.now() }
		create(newPost)
		setPost({ title: '', content: '' })
	}

	return (
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
				onChange={e => setPost({ ...post, content: e.target.value })}
				type='text'
			/>
			<CustomButton onClick={addNewPost}>Добавить пост</CustomButton>
		</form>
	)
}
