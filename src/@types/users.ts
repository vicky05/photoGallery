export type Users = {
    isFetching: boolean,
    data: any[],
    cloneData : any[]
}

export type ColumMapData = {
    name: string,
    field: string,
    isJsx: boolean
}

export type PgainateProps = {
    loading: boolean,
    tableBodyData: any[]
}
