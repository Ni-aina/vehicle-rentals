import { TableProps } from "@/types/table";
import { ReactNode } from "react";

export const Table = <T,>({ columns, data }: TableProps<T>) => {
    return (
        <div className="overflow-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        {
                            columns.map((column, index)=> <th key={index} className="pb-2">{column.header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row: any, indexRow)=> 
                            <tr key={indexRow} className={`${indexRow%2 === 0 && 'bg-gray-400'}`}>
                                {
                                    columns.map((column, index) => 
                                        <td key={index} className="p-2">
                                            {row[column.accessor] as ReactNode}
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
