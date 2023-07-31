import Image from 'next/image'
import React from 'react'

const PictureTextDivider = ({imageUrl, imageContainerClassNames, imageClassNames, imageFirst = false, children, bgColor}) => {
  return (
    <div className={`flex ${imageFirst ? "flex-row" : "flex-row-reverse"} ${bgColor} px-[10.2%] items-center py-[107px] gap-[97px]`}>
        <div className={`${imageContainerClassNames} w-[50%]`}>
          <img src={imageUrl} width={0} height={0} className={`${imageClassNames}`} alt='Image' />
        </div>
        
        <div className='w-[50%]'>
          {children}
        </div>
        
    </div>
  )
}

export default PictureTextDivider