import { useMemo } from 'react';
import TableComponent from "./table";
import { RootState } from "../reducer/store";
import { useSelector, useDispatch } from 'react-redux';
import Header from "../components/header";
import Albums from "./albums";
import BreadcrumbComponent from "../components/breadCrumb";
import Photos from "./photo";
import Button from 'react-bootstrap/Button'
import { setActivePage } from '../reducer/slice/common';


const PhotoGallery = () => {
  const activePage = useSelector((state: RootState) => state.common.activePage);
  const dispatch = useDispatch();
  const detailedView = useMemo(() => {
    switch (activePage) {
      case 'Home': return <TableComponent />
      case 'Albums': return <Albums />
      case 'Photos': return <Photos />
      case 'Landing': return <div className="bg-img " />
      default: return null;
    }
  }, [activePage]);
  return (<div>
    <Header />
    {activePage === "Landing" ? <Button style={{ margin: '5px' }} onClick={() => { dispatch(setActivePage({ activePage: "Home" })) }}>Go to home </Button> : null}
    <div style={{ padding: '20px' }}>
      {activePage !== "Landing" ? <BreadcrumbComponent /> : null}
      {detailedView}
    </div>
  </div>);
}

export default PhotoGallery;