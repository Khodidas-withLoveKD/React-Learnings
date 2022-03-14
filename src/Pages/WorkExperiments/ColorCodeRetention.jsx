import React from 'react'

class ColorCodeRetention extends React.Component {
	state = {
		values: [12, 0, 49.999, 50, 75, 75.888, 76, 99.9, 100],
	}
	getValueColors = (value) => {
		let color = 'bg-'
		if (value < 26) {
			color += 'secondary'
		} else if (value >= 26 && value <= 50) {
			color += 'info'
		} else if (value >= 51 && value <= 75) {
			color += 'warning'
		} else {
			color += 'primary'
		}
		return color
	}
	render() {
		return (
			<div>
				{this.state.values.map((value) => {
					return (
						<span
							key={value}
							className={`btn m-2 ${this.getValueColors(Math.floor(value))}`}
						>
							{value}
						</span>
					)
				})}
			</div>
		)
	}
}

export default ColorCodeRetention
