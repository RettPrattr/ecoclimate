'use client'

import { useRef, useEffect } from 'react'

import BlazeSlider from 'blaze-slider'

export default function useBlazeSlider(config) {
	const sliderRef = useRef()
	const elRef = useRef()

	useEffect(() => {
		if (!sliderRef.current) {
			sliderRef.current = new BlazeSlider(elRef.current, config)
		}
	}, [sliderRef, elRef, config])

	return elRef
}