'use client'

import React from 'react'
import useUser from '../hook/useUser'
import Post from '@/components/Post'
import Price from '@/components/subscription/price'

export default function Subscription() {
    const { data:user, isLoading } = useUser()

    if(isLoading){
        return <></>
    }

    const isActive = !user?.subscription?.end_at ? false : new Date(user.subscription.end_at) > new Date()

    return (
        <div>
            <div>
                {isActive ? <Post/> : (
                    <div className='mt-2'>
                        <h1 className='text-center text-3xl font-bold'>You need to subscribe to see the data</h1>
                        <Price />
                    </div>
                )}
            </div>
        </div>
    )
}
