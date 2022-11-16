import React, { FC } from 'react'
import styles from './styles.module.scss'

const imgData: string[] = [
	'https://cdn.inappstory.com/story/jyh/0vs/yu5/xv0l4kycefef57sm25g03d0/custom_cover/logo-350x440.jpg?v=1668511311',
	'https://cdn.inappstory.com/story/mds/tth/jey/uaipormqapzhexrukvjhvjr/custom_cover/logo-350x440.jpg?v=1667390273',
	'https://cdn.inappstory.com/story/0vr/8af/rio/m7silf5uqwe9rmkgmnovaq6/custom_cover/logo-350x440.jpg?v=1667890087',
	'https://cdn.inappstory.com/story/eig/fye/per/l4rwwxkmazwr2knog29ci7h/custom_cover/logo-350x440.jpg?v=1667281584',
	'https://cdn.inappstory.com/story/3bb/1bl/u8g/fwx6qgcmrtpyx4t84uk10tk/custom_cover/logo-350x440.jpg?v=1662013835',
	'https://cdn.inappstory.com/story/a1i/x8k/n7s/6rjhsbrsyqtsn3jd3psfad8/custom_cover/logo-350x440.jpg?v=1666255326'
]

const StoriesList: FC = () => {
	return (
		<div className={styles.container}>
			{imgData.map((img, idx) => (
				<div key={idx} className={styles.content}>
					<img
						className={styles.storiesImg}
						src={img}
						alt="storiesImage"
					/>
				</div>
			))}
		</div>
	)
}

export default StoriesList
