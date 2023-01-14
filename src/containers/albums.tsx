
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbumData } from '../sagas/actions/users';
import { setActiveAlbumId } from '../reducer/slice/photos';
import { RootState } from '../reducer/store';
import { setActivePage, setBreadCrumbList } from '../reducer/slice/common';
import Title from '../components/title';

const Albums = () => {

    const dispatch = useDispatch();
    const activeUserId = useSelector((state: RootState) => state.albums.activeUserId);
    const data = useSelector((state: RootState) => state.albums.data);
    const breadCrumbList = useSelector((state: RootState) => state.common.breadCrumbList);

    useEffect(() => {
        dispatch(getAlbumData());
    }, [dispatch]);

    const activeAlbums = useMemo(() => {
        const filteredData = data.filter((it) => it.userId === activeUserId);
        return filteredData
    }, [activeUserId, data]);

    const handleClick = (albumId: number) => {
        dispatch(setActiveAlbumId({ albumId, showPhotos: true }));
        const newBreadCrumbList = [...breadCrumbList, "Photos"]
        dispatch(setBreadCrumbList({ breadCrumbList: newBreadCrumbList }))
        dispatch(setActivePage({ activePage: "Photos" }))
    }

    return (<>
        <Title title="Albums" />
        <Row xs={1} md={2} className="g-4 bg-light">
            {activeAlbums.map((it, idx) => (
                <Col xl={3} md={4} key={`album-${idx}` + 1}>
                    <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>{`Album - ${idx + 1}`}</Card.Title>
                            <Card.Text>{it.title}</Card.Text>
                            <Button variant="outline-primary" onClick={() => handleClick(it.id)}>view</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>);
}

export default Albums;