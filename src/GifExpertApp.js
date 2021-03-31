import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['cat'])

    // const handleAdd = () => {

    //    // setCategories(categories => categories.concat('hunter x hunter'))
    //    setCategories([...categories,'hunter x hunter'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((item, index) => (
                        <GifGrid
                            key={item}
                            category={item} />
                    ))
                }
            </ol>
        </div>
    )
}
