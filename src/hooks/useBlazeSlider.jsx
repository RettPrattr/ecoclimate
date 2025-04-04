'use client'

import { useRef, useEffect } from 'react'
import BlazeSlider from 'blaze-slider'

export default function useBlazeSlider(config) {
	const elRef = useRef(null)
	const sliderRef = useRef(null)

	useEffect(() => {
		if (elRef.current && !sliderRef.current) {
			sliderRef.current = new BlazeSlider(elRef.current, config)
		}
	}, []) // важно: не зависим от config

	return elRef
}
