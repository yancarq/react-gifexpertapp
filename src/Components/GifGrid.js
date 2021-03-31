import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(img => setImages(img));
    // }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {loading && <p>Cargando.....</p>}
                {
                    data.map(gif => (
                        < GifGridItem
                            key={gif.id}
                            {...gif} />
                    )
                    )
                }

            </div>
        </div>

    )
}
