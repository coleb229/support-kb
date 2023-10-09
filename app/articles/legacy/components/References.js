const References = (props) => {
    const list = props.list

    return(
        <table className='table-fixed w-[90%] mx-auto border-2 border-black text-left'>
            <thead className='bg-slate-400'>
                <tr className='border-2 border-black'>
                    <th className='pl-4'>Source</th>
                    <th>Credit</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {list.map((row) => {
                    return(
                        <tr className='border-b border-white'>
                            <td className='pl-4'><a href={row[0]} target='_blank' rel='noreferrer'>Link</a></td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default References