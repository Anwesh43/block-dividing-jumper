import React from 'react'
import {useStyle} from './hooks'

const Block = ({w, h, scale, i}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return <div style = {getBlockStyle(i)}>
    </div>
}
const BlockDividingJumper = ({w, h, scale, onClick}) => {
    return (<div onClick = {onClick}>
      {[0, 1].map(i => <Block key = {`block_${i}`} i = {i} w = {w} h = {h} scale = {scale}/>)}
    </div>)
}

export default BlockDividingJumper
