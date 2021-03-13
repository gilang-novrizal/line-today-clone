import React from 'react'
import { useSelector } from 'react-redux'
import Appbar from '../components/appbar'
import MainLayout from '../layout/mainLayout'

const CoronaPage = () => {
    const categories = useSelector(state => state.newsReducer.categories)
    return (
        <div>
            <Appbar />
            <MainLayout category={categories?.[16]}/> 
        </div>
    )
}

export default CoronaPage