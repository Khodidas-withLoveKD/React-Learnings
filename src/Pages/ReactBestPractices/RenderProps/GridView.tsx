import { IObjProps } from 'shared/interfaces'

const GridView = ({ users }: { users: Array<IObjProps> }) => {
	return (
		<div>
			<h3> Will display horizontally for now</h3>
			<div style={{ display: 'flex' }}>
				{users.map((user: IObjProps) => (
					<span>{user.name} | </span>
				))}
			</div>
		</div>
	)
}

export default GridView
