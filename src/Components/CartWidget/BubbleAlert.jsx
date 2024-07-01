import React from 'react'

export const BubbleAlert = ({value}) => {
    
    function getnumber(n) {
        if (!n) {return ''}
        return n > 9 ? "9+" : n
    }
    
    return (
    <>
    <span className="bubbleAlert">{getnumber(value)}</span> 
    </>
  )
  
}
