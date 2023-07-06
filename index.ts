//通用分页接口
export interface IPageNumber {
    pageNum: number,
    pageSize: number
}

//树形接口
export interface ITree {
    id: string
    label?: string
    name: string
    children?: ITree[]
}