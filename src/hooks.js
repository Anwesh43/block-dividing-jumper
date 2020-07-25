import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(currScale)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 10
    const background = '#4CAF50'
    const position = 'absolute'
    const y = `${(h / 2 - size) * (1 - sf)}px`
    const sf1 = sinify(divideScale(sf, 0, 3))
    const sf2 = sinify(divideScale(sf, 1, 3))
    const sf3 = sinify(divideScale(sf, 2, 3))
    const dx = (w / 2 - size)
    return {
        getBlockStyle(i) {
            const x = (w / 2 - size) + size * i + dx * (sf1 + sf2 + sf3)
            const left = `${x}px`
            const top = `${y}px`
            const width = `${size}px`
            const height = `${size}px`
            return {position, background, left, top, width, height}
        }
    }
}
