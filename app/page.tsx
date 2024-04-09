import Price from '@/components/subscription/price'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Link href='/dashboard' className='underline'>/dashboard</Link>
      <Link href='/profile' className='underline'>/profile</Link>
      <Link href='/subscription' className='underline '>/subscription</Link>
      <Price />
    </div>
  )
}

export default page