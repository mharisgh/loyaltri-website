import Image from 'next/image'
import React from 'react'

const HeadingDesc = ({badgeText,badgeImg,badgeBgColor,title,desc,itemsLayout,textLayout,textColor}) => {
  return (
    <div className={`${textColor} flex flex-col gap-4 items-center text-center itemsLayout ${textLayout} ${itemsLayout} w-full`}>
      <div style={{backgroundColor: badgeBgColor}} className={`flex gap-2 w-fit  py-2 px-4 rounded-full justify-center items-center `}>

        {badgeImg ? <Image
          src={badgeImg} width={16} height={16} alt='loyaltri title icon' />: ''}

        <p className='text-xs font-semibold uppercase'>{badgeText}</p>
      </div>
      <h1 className={`text-3xl lg:text-4xl font-semibold`}>{title}</h1>
      <p className={`text-sm lg:text-base `}>{desc}</p>
    </div>
  )
}

export default HeadingDesc