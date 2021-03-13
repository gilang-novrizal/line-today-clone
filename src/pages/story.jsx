import React from 'react'
import { useSelector } from 'react-redux'
import Appbar from '../components/appbar'
import MainLayout from '../layout/mainLayout'

const StoryPage = () => {
    const categories = useSelector(state => state.newsReducer.categories)
    return (
        <div>
            <Appbar />
            <MainLayout category={categories?.[12]}/> 
        </div>
    )
}

export default StoryPage