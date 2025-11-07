import CustomInput from './UI/input/CustomInput'
import CustomSelect from './UI/select/CustomSelect'

export default function PostFilter({ filter, setFilter }) {
	return (
		<div>
			<CustomInput
				placeholder='Поиск...'
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<CustomSelect
				value={filter.sort}
				onChange={selectedSort =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue='Сортировка'
				options={[
					{ value: 'title', name: 'По заголовку' },
					{ value: 'content', name: 'По контенту' },
				]}
			/>
		</div>
	)
}
