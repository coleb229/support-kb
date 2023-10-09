const SubHeader = (props) => {
  return (
    <div>
      <div id={props.section} className=''>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <div className='mx-auto w-[95%] bg-slate-200 p-5 border-2 border-b-black flex justify-between'>
          <h1 className='ml-14 text-left text-lg font-semibold'>
            {props.title}
          </h1>
          <h1 className='mr-14 text-left text-lg'>Troubleshooting</h1>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
