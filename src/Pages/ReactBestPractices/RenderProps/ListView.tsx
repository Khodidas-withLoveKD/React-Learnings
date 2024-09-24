import { IObjProps } from 'shared/interfaces'

const ListView = ({ users }: { users: Array<IObjProps> }) => {
	return (
		<div>
			<h3> Will display Vertically for now</h3>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{users.map((user: IObjProps) => (
					<span>{user.name} | </span>
				))}
			</div>
		</div>
	)
}

export default ListView
