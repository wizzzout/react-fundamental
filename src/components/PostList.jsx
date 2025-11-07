import { AnimatePresence, motion } from 'motion/react'
import PostItem from './PostItem'

export default function PostList({ posts, title, remove }) {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
	}

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<AnimatePresence>
				{posts.map((post, index) => (
					<motion.div
						key={post.id}
						initial={{ opacity: 0, height: 0, x: 1 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<PostItem
							remove={remove}
							number={index + 1}
							post={post}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</>
	)
}
