'use client'

import { useRef, useEffect } from 'react'
import BlazeSlider from 'blaze-slider'

export default function useBlazeSlider(config) {
	const elRef = useRef(null)

	useEffect(() => {
		if (elRef.current) {
			new BlazeSlider(elRef.current, config)
		}
	}, [config])

	return elRef
}
