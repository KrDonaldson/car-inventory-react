import React from 'react'
import { Navbar } from '../../components/Navbar'

interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    return (
        <>
            <Navbar />
            <div>
            <h1>{props.title}</h1>
            </div>
        </>
    )
}
