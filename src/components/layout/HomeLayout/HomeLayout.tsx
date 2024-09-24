import React from 'react'
import { HomeLayoutProps } from './HomeLayout.interface'
import Navbar from '@/components/container/navbar/Navbar'
import Footer from '@/components/container/footer'

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout