import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BlockDividingJumper from './BlockDividingJumper'
const BlockDividingJumperComponent = ({props}) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02 / 6, 30)
    return (<BlockDividingJumper w = {w} h = {h} scale = {scale} onClick = {start}>
        </BlockDividingJumper>)
}
export default BlockDividingJumperComponent
