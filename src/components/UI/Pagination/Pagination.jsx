import { getPagesArray } from '../../../utils/pages'
import classes from './Pagination.module.css'

export default function Pagination({ totalPages, page, changePage }) {
	let pagesArray = getPagesArray(totalPages)

	return (
		<div className={classes.page__wrapper}>
			{pagesArray.map(p => (
				<span
					onClick={() => {
						changePage(p)
					}}
					key={p}
					className={
						page === p
							? [classes.page, classes.page__current].join(' ')
							: [classes.page]
					}
				>
					{p}
				</span>
			))}
		</div>
	)
}
