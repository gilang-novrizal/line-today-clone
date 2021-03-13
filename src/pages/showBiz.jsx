import React from 'react'
import { useSelector } from 'react-redux'
import Appbar from '../components/appbar'
import MainLayout from '../layout/mainLayout'

const ShowBiz = () => {
    const categories = useSelector(state=> state.newsReducer.categories)
    return (
        <div>
            <Appbar/>
            <MainLayout category={categories?.[1]}/>
        </div>
    )
}

export default ShowBiz
