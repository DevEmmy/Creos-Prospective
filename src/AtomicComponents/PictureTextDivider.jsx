import Image from 'next/image'
import React from 'react'

const PictureTextDivider = ({imageUrl, imageContainerClassNames, imageClassNames, imageFirst = false, children, bgColor}) => {
  return (
    <div className={`flex ${imageFirst ? "flex-row sm:flex-col-reverse" : "flex-row-reverse sm:flex-col-reverse"} ${bgColor} px-[10.2%] sm:px-xpadding items-center pt-0 sm:pt-12 py-[107px] gap-[97px]`}>
        <div className={`${imageContainerClassNames} w-[50%] sm:w-[100%]`}>
          <img src={imageUrl} width={0} height={0} className={`${imageClassNames}`} alt='Image' />
        </div>
        
        <div className='w-[50%] sm:w-[100%]'>
          {children}
        </div>
        
    </div>
  )
}

export default PictureTextDivider