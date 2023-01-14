import React from 'react';
import Button from 'react-bootstrap/Button'
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducer/store';
import { getPhotos } from '../sagas/actions/users';

const Photos = () => {
    const dispatch = useDispatch();
    const activeAlbumId = useSelector((state: RootState) => state.photos.activeAlbumId);
    const data = useSelector((state: RootState) => state.photos.data);
    const isFetching = useSelector((state: RootState) => state.photos.isFetching);
    const [visibleBlogs, setVisibleBlogs] = useState(6);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    const activePhotos = useMemo(() => {
        const filteredData = data.filter((it) => it.albumId === activeAlbumId);
        return filteredData
    }, [activeAlbumId, data]);

    const handleShowMorePosts = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 9)
    };


    return (
        <div className="container">
            <h2 className="heading-text">List <span> of image </span></h2>
            {isFetching ? <div style={{ position: 'fixed', top: '50%', left: '50%' }}><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i></div> :
                <ul className="image-gallery">
                    {activePhotos.slice(0, visibleBlogs).map((it, idx) => (
                        <div key={`img-${idx}`}>
                            <img src={it.url} alt="" />
                            <div className="overlay"><span>{it.title}</span></div>
                        </div>
                    ))}
                </ul>}
            {visibleBlogs > activePhotos.length ? <div><h2 className="heading-text">End <span> of data </span></h2>
            <Button variant="outline-primary" onClick={()=>{ window.scroll(0,0)}}>Go to top</Button>
            </div> : <Button variant="outline-primary" onClick={handleShowMorePosts}>Load More</Button>}
        </div>
    )
}

export default Photos;