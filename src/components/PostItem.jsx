import { useNavigate } from 'react-router'
import CustomButton from './UI/button/CustomButton'

export default function PostItem(props) {
	const navigate = useNavigate()

	return (
		<div className='post'>
			<div className='post__content'>
				<strong>
					{props.post.id}. {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className='post__btns'>
				<CustomButton
					onClick={() => {
						navigate(`/posts/${props.post.id}`)
					}}
				>
					Открыть
				</CustomButton>
				<CustomButton onClick={() => props.remove(props.post)}>
					Удалить
				</CustomButton>
			</div>
		</div>
	)
}
