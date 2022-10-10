import React from 'react'

import errorPng from '../../assets/images/error.png'
import styles from './styles.module.scss'

const ErrorBlock = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Произошла ошибка 😓</h2>
			<p>
				К сожелению, не удалось получить пиццы. Попробуйте повторить
				попытку позже.
			</p>
			<img src={errorPng} alt="Empty cart" />
		</div>
	)
}

export default ErrorBlock
