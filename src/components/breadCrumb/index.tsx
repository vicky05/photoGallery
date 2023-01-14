import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer/store';
import { setActivePage, setBreadCrumbList } from '../../reducer/slice/common';

const BreadcrumbComponent = () => {
  const dispatch = useDispatch();
  const breadCrumbList = useSelector((state: RootState) => state.common.breadCrumbList);

  const handleBreadCrumbClick = (page: string, breadCrumbList: any[]) => {
    const breadCrumb = [...breadCrumbList];
    const itemIndex = breadCrumb.indexOf(page) + 1;
    const newBreadCrumbList = breadCrumb.splice(0, itemIndex);
    dispatch(setActivePage({ activePage: page }))
    dispatch(setBreadCrumbList({ breadCrumbList: newBreadCrumbList }))
  }
  return (
    <Breadcrumb>
      <svg style={{ margin: "3px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
      </svg>
      {breadCrumbList.map((it, idx) => {
        return (<Breadcrumb.Item key={`bredcrumb-${idx}`}
          active={breadCrumbList.length > 1 && breadCrumbList.length - 1 === idx ? true : false}
          className={breadCrumbList.length - 1 === idx ? "ptr-none" : ""}
          onClick={() => handleBreadCrumbClick(it, breadCrumbList)}>{it}</Breadcrumb.Item>)
      })}
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;