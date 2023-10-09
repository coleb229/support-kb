const SectionHeader = (props) => {
  return (
    <div id={props.id} className='mx-5 text-left'>
      <h1 className='text-xl mb-4 border-black border-b-[1px]'>
        {props.title}
      </h1>
      <p>{props.description}</p>
    </div>
  );
};

export default SectionHeader;
