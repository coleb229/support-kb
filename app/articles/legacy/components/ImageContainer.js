function ImageContainer(props) {
  return (
    <div className='w-full border-[1px] border-black m-2'>
      <img className='w-full' src={props.src} alt={props.src} />
      <p className='text-center bg-slate-200'>{props.desc}</p>
    </div>
  );
}

export default ImageContainer;
