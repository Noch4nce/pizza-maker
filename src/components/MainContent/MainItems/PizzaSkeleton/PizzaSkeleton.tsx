import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const PizzaSkeleton: FC = () => (
	<div className="pizza-block">
		<ContentLoader
			speed={2}
			width={280}
			height={500}
			viewBox="0 0 280 500"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="140" cy="132" r="120" />
			<rect x="0" y="279" rx="0" ry="0" width="280" height="30" />
			<rect x="0" y="336" rx="10" ry="10" width="280" height="85" />
			<rect x="115" y="447" rx="20" ry="20" width="160" height="50" />
			<rect x="0" y="457" rx="5" ry="5" width="90" height="30" />
		</ContentLoader>
	</div>
)

export default PizzaSkeleton
