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
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
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
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 10
    const background = '#4CAF50'
    const position = 'absolute'

    const sf1 = divideScale(sf, 0, 3)
    const sf2 = divideScale(sf, 1, 3)
    const sf3 = divideScale(sf, 2, 3)

    const sf01 = sinify(divideScale(sf1, 0, 2))
    const sf02 = sinify(divideScale(sf2, 0, 2))
    const sf03 = sinify(divideScale(sf3, 0, 2))

    const sf11 = divideScale(sf1, 1, 2)
    const sf12 = divideScale(sf2, 1, 2)
    const sf13 = divideScale(sf3, 1, 2)

    const y = h - size - ((h - size) / 3) * (sf11 + sf12 + sf13)
    const dx = (w / 2 - size)
    return {
        getBlockStyle(i) {
            const x = (w / 2 - size) + size * i + dx * (sf01 + sf02 + sf03) * (1 - 2 * i)
            const left = `${x}px`
            const top = `${y}px`
            const width = `${size}px`
            const height = `${size}px`
            return {position, background, left, top, width, height}
        }
    }
}
