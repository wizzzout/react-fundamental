export default function PostItem(props) {
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>
					{props.number}. {props.post.title}
				</strong>
				<div>{props.post.content}</div>
			</div>
			<div className='post__btns'>
				<button>Удалить</button>
			</div>
		</div>
	)
}
