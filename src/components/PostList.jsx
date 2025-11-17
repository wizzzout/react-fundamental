import { AnimatePresence, motion } from 'motion/react';
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Постов нет</h1>;
	}

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<AnimatePresence>
				{posts.map((post, index) => (
					<motion.div
						key={post.id}
						initial={{ transform: 'translateX(180px)', height: 0 }}
						animate={{
							transform: 'translateX(0)',
							height: 'auto',
						}}
						exit={{ transform: 'translateX(-180px)', height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<PostItem remove={remove} number={index + 1} post={post} />
					</motion.div>
				))}
			</AnimatePresence>
		</>
	);
}
