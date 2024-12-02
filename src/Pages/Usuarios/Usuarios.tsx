import React, { useState } from "react";
import Lista from "../../Components/Lista/Lista";

const Usuarios: React.FC = () =>{
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState("")

    const filterData = data.filter((item) =>
        search.toLowerCase() === "" ? item : item.week.toLowerCase().includes(search.toLowerCase)
    );

    return(
        <section className="flex flex-col pt-80 w-100% justify-center items-center">
            <div className="w-[900px] ml-[20%] bg-black justify-center items-center">
                <div className="overflow-y-auto">
                        <table className="font-poppinsFont text-center w-full rounded-xl">
                            <thead className="text-xl bg-neutral-200 sticky top-0 z-10">
                                <tr>
                                    <th className="p-4">Week</th>
                                    <th className="p-4">Material</th>
                                    <th className="p-4">Order Placed</th>
                                    <th className="p-4">Order Received</th>
                                </tr>
                            </thead>
                            <tbody className="text-base">
                                {filterData.length > 0 ? (
                                    filterData.map((item, index) => (
                                        <tr
                                            className="border-b last:border-none hover:bg-gray-100 transition-colors"
                                            key={index}>

                                            <td className="p-4">{item.week}</td>
                                            <td className="p-4">{item.materialName}</td>
                                            <td className="p-4">{item.orderPlaced} pcs</td>
                                            <td className="p-4">{item.orderReceived} pcs</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="border-b last:border-none hover:bg-gray-100 transition-colors">
                                        <td colSpan={8} className="p-4">
                                            No results found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                </div>
            </div>
        </section>
    )
}

export default Usuarios