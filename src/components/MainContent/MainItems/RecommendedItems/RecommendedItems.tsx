import React, { FC } from 'react'
import styles from './styles.module.scss'

type item = {
	name: string
	image: string
	price: string
}

const items: item[] = [
	{
		name: 'Пепперони фреш',
		image: 'https://cdn.dodostatic.net/static/Img/Products/46687fb153db403ca1be721ea41247d0_146x146.png',
		price: 'от 289 ₽'
	},
	{
		name: '3 пиццы',
		image: 'https://cdn.dodostatic.net/static/Img/ComboTemplates/2b93a004f4604f36a2ee20254f91d99c_233x233.png',
		price: '1099 ₽'
	},
	{
		name: 'Додстер',
		image: 'https://cdn.dodostatic.net/static/Img/Products/93add58319a84824b8618a6a34b9ef60_146x146.png',
		price: '169 ₽'
	},
	{
		name: 'Комбо от 599 ₽',
		image: 'https://cdn.dodostatic.net/static/Img/ComboTemplates/922a6d2b92b0455688be6bb39bf787e0_233x233.png',
		price: '599 ₽'
	},
	{
		name: 'Бруслетики, 16 шт',
		image: 'https://cdn.dodostatic.net/static/Img/Products/4bd0631f23144742b1e4f80b62bc61b5_146x146.jpeg',
		price: '205 ₽'
	}
]

const RecommendedItems: FC = () => {
	return (
		<div className={styles.container}>
			<h2>Часто заказывают</h2>

			<div className={styles.recommendedWrapper}>
				{items.map((item, idx) => (
					<div key={idx} className={styles.content}>
						<img src={item.image} alt="recommendedImage" />

						<div className={styles.info}>
							<span>{item.name}</span>
							<span>{item.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecommendedItems
