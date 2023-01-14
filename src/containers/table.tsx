import { useCallback, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { ColumMapData } from '../@types/users';
import { RootState } from '../reducer/store';
import { getTableData } from '../sagas/actions/users';
import { setActiveUserId } from '../reducer/slice/albums'
import { setActivePage, setBreadCrumbList } from '../reducer/slice/common';
import Title from '../components/title';

const TableComponent = () => {

    const usersList = useSelector((state: RootState) => state.users.data);
    const isFetching = useSelector((state: RootState) => state.users.isFetching);
    const breadCrumbList = useSelector((state: RootState) => state.common.breadCrumbList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTableData());
    }, [dispatch]);


    const headers: ColumMapData[] = useMemo(() => {
        return ([
            { name: 'UserId', field: 'id', isJsx: false },
            { name: 'Name', field: 'name', isJsx: false },
            { name: 'UserName', field: 'username', isJsx: false },
            { name: 'Phone', field: 'phone', isJsx: false },
            { name: 'Website', field: 'website', isJsx: false },
            { name: 'Email', field: 'email', isJsx: false },
            { name: 'View', field: 'Albums', isJsx: true }])
    }, []);

    const renderButton = useCallback((type: string, userId: number) => {
        return (
            <Button onClick={() => {
                dispatch(setActiveUserId({ userId, showAlbum: true }));
                const newBreadCrumbList = [...breadCrumbList, "Albums"]
                dispatch(setBreadCrumbList({ breadCrumbList: newBreadCrumbList }));
                dispatch(setActivePage({ activePage: "Albums" }))

            }} variant="outline-primary">{type}</Button>
        )
    }, [breadCrumbList, dispatch])


    const renderTable = useCallback(() => {
        return (<>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {headers.map((it, idx) => {
                            return (<th key={`th-${idx}`}>{it.name}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((it: any, idx: any) => (
                        <tr key={`row${idx}`}>
                            {headers.map((h) => {
                                return (
                                    <td key={`td-${h.name}`}>{h.isJsx ? renderButton(h.field, it.id) : it[h.field]}</td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
        );
    }, [headers, usersList, renderButton])
    return isFetching ?
        <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div> : usersList.length > 0 ?
            <>
                <Title title="Users" />
                {renderTable()}
            </> : null;
}

export default TableComponent;