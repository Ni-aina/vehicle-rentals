export type UserType = {
    firstName: string,
    startedAt: string,
    vehicle: string,
    actions: string,
}

export type Column<T> = {
    header: string,
    accessor: string
}

export interface TableProps<T> {
    columns: Column<T>[],
    data: UserType[]
}