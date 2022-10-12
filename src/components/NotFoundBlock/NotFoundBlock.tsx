import React, { FC } from 'react'

import notFoundPng from '../../assets/images/404.png'
import styles from './styles.module.scss'

const NotFoundBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<img
				className={styles.notFoundImage}
				src={notFoundPng}
				alt="not found"
			/>
			<h1>
				<span>Упс!</span> Что-то пошло не так 🙄
			</h1>

			<p>
				Страница которую вы ищите не найдена. Возможно адрес страницы
				введен <br /> неправильно или страница была удалена!
			</p>
		</div>
	)
}

export default NotFoundBlock
