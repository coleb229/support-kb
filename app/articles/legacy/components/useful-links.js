function UsefulLinks() {
  return (
    <div className='bg-slate-300 border-2 w-[95%] mx-auto mt-2 rounded'>
      <h3>Useful Links</h3>
      <hr />
      <hr />
      <hr />
      <table className='table-fixed w-4/6 mx-auto'>
        <tbody>
          <TableRow
            name='Ponder'
            link='https://collab.metispro.com/ponder/'
            description='FAQ section of collab'
          />
          <TableRow
            name='learn.myquantic'
            link='https://learn.myquantic.com/'
            description='FrontEnd resource for products'
          />
          <TableRow
            name='MetisChat'
            link='https://chat.metispro.com/group/support'
            description='Support chat'
          />
          <TableRow
            name='Partner Portal'
            link='https://partnerportal.metispro.com/'
            description='This is our CRM'
          />
          <TableRow
            name='Collab'
            link='https://collab.metispro.com/'
            description='Ticketing system for dev team'
          />
          <TableRow
            name='3cx'
            link='https://quantic.pa.3cx.us/webclient/#/people'
            description='VoIP service we use to take calls'
          />
          <TableRow
            name='Pax Store'
            link='https://paxus.paxstore.us/admin/#/welcome'
            description='Use this for pushing software to Pax devices'
          />
        </tbody>
      </table>
    </div>
  );
}

function TableRow(props) {
  return (
    <tr>
      <a
        className='transition duration-150 ease-out hover:ease-in flex justify-between hover:text-zinc-600 hover:bg-slate-200'
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        <td className='text-left'>{props.name}</td>
        <td className='text-right'>{props.description}</td>
      </a>
      <hr />
    </tr>
  );
}

export default UsefulLinks;
