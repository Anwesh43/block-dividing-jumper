import React from 'react'
import {useStyle} from './utils'

const Block = ({w, h, scale, onClick, i}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return <div style = {getBlockStyle(i)}>
    </div>
}
const BlockDividingJumper = ({w, h, scale, onClick}) => {
    return <div onClick = {onClick}>
      {[0, 1].map(<Block w = {w} h = {h} scale = {scale}/>)}
    </div>
}

export default BlockDividingJumper 
