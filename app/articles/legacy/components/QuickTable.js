const QuickTable = (props) => {
  const list = props.list;

  return (
    <table className='table-fixed w-[90%] mx-auto border-2 border-black text-left'>
      <thead className='bg-slate-400'>
        <tr className='border-2 border-black'>
          <th className='pl-4'>{props.labels[0]}</th>
          <th className='pr-4'>{props.labels[1]}</th>
        </tr>
      </thead>
      <tbody>
        {list.map((row) => {
          return (
            <tr className='border-b border-white'>
              <td className='pl-4'>{row[0]}</td>
              <td className='pr-4'>{row[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default QuickTable;
