import ArticleHeader from '../legacy/components/ArticleHeader.js';
import PageNav from '../legacy/components/PageNav.js';
import References from '../legacy/components/References.js';
import SectionHeader from '../legacy/components/SectionHeader.js';
import QuickTable from '../legacy/components/QuickTable.js';
import ImageContainer from '../legacy/components/ImageContainer.js';
// image imports
import assignment from '@/public/assets/assignment.JPG';
import priority from '../../../public/assets/priority.JPG';
import handoff from '../../../public/assets/handoff.JPG';
// data import
import Data from '../legacy/data/TechnicalSupport.data';

const TechnicalSupport = () => {
  return (
    <div>
      <ArticleHeader title='Technical Support Guide' />
      <div className='flex justify-between'>
        <div className='max-w-[350px]'>
          <PageNav path='' links={Data.links} />
        </div>
        <div className='w-[80%] bg-slate-100'>
          <div id='references' className='py-4'>
            <References list={Data.references} />
          </div>

          {/* --- SUPPORT ENTRY POINTS --- */}
          <EntryPoints />

          {/* --- CALLS --- */}
          <CallGuide />

          {/* --- TICKETS --- */}
          <Tickets />

          {/* SHIFT HANDOFF */}
          <ShiftHandoff />

          {/* --- SOFTWARE BASICS --- */}
          <SoftwareBasics />

          {/* --- HARDWARE BASICS --- */}
          <HardwareBasics />

          {/* --- PARTNERS --- */}
          <Partners />

          {/* --- TERMINOLOGY --- */}
          <Terminology />

          {/* --- TECHNICAL SUPPORT PROCESSES --- */}
          <SupportProcesses />
        </div>
      </div>
    </div>
  );
};

const EntryPoints = () => {
  return (
    <div id={Data.links[0][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[0][1]} />
      <div className='text-left mx-5 bg-slate-100 pb-5'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover some of the lines that we use to interact with
          merchants.
        </p>
        <br />
        <ul className='list-disc ml-10'>
          <li>
            Support Email ---{'>'} Paste this into a browser that is signed into
            support@getquantic.com
          </li>
          <div>
            <a
              id='email'
              className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
              href='https://mail.google.com/'
              rel='noreferrer'
              target='_blank'
            >
              Link
            </a>
            <button>
              {' '}
              {/* Add copy function here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <path
                  fill='#212121'
                  d='M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z'
                />
              </svg>
            </button>
          </div>
          <li>Support Text Line, 484-321-6747 (Google Voice App)</li>
          <div>
            <a
              className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
              href='https://voice.google.com'
              rel='noreferrer'
              target='_blank'
            >
              Link
            </a>
            <button>
              {' '}
              {/* Add copy function here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <path
                  fill='#212121'
                  d='M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z'
                />
              </svg>
            </button>
          </div>
          <li>Support Call Line, 484-630-0449 (3CX App)</li>
          <div>
            <a
              className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
              href='https://quantic.pa.3cx.us/webclient/#/people'
              rel='noreferrer'
              target='_blank'
            >
              Link
            </a>
            <button>
              {' '}
              {/* Add copy function here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <path
                  fill='#212121'
                  d='M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z M11.5,3 L6.5,3 C6.22385763,3 6,3.22385763 6,3.5 L6,10.5 C6,10.7761424 6.22385763,11 6.5,11 L11.5,11 C11.7761424,11 12,10.7761424 12,10.5 L12,3.5 C12,3.22385763 11.7761424,3 11.5,3 Z'
                />
              </svg>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

const CallGuide = () => {
  return (
    <div id={Data.links[1][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[1][1]} />
      <div className='text-left mx-5 bg-slate-100 pb-5'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover how to handle calls in support.
        </p>
        <br />
        <div className='flex'>
          <div className='ml-10 px-5'>
            <h1 className='text-xl'>DO's:</h1>
            <ul className='list-disc'>
              <li>
                Hello, Technical Support, my name is '____'. How can I help you?
                (Open how you want, just keep it friendly)
              </li>
              <li>
                Ask for a business(dba/merchant) name, and pull up the account
                in our{' '}
                <a
                  className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
                  href='https://partnerportal.metispro.com/account'
                  rel='noreferrer'
                  target='_blank'
                >
                  Partner Portal
                </a>
              </li>
              <li>
                Ask for a description of the problem. Check product type. Gather
                as much information as possible.
              </li>
              <li>
                Write in the comment section to take notes as the customer is
                describing the problem, or take notes.
              </li>
              <li>
                If unable to solve on the spot, either hold the line briefly and
                reach out for help, or tell the customer that they will be
                contacted shortly after with a proper solution.
              </li>
              <li>Document clear notes on the call and create a ticket.</li>
              <li>
                Maintain confidence through the call, it will make the
                interaction much smoother for you.
              </li>
            </ul>
          </div>
          <div className='px-5'>
            <h1 className='text-xl'>DON'Ts:</h1>
            <ul className='list-disc'>
              <li>Avoid spending more than 15 minutes on routine calls</li>
              <li>
                Do not mention any bug or server issues to the
                merchants/partners.
              </li>
              <li>
                Do not mention the dev team. Instead, say that you will check
                with the team
              </li>
              <li>
                Do not mention the manager's name to the client. Just say that
                you will speak with your manager.
              </li>
              <li>
                Do not tell the customer that you will be putting them on hold.
                Instead, use 'Give me a second' or 'Let me look into this.'
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tickets = () => {
  return (
    <div id={Data.links[2][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[2][1]} />
      <div className='bg-slate-100 text-left mx-5 pb-5'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover how to make and interact with tickets in our
          CRM and through collab.
        </p>
        <div className='pt-5'>
          <h1 className='text-2xl text-center'>Partner Portal (CRM)</h1>
          <div className='flex justify-around'>
            <div className='w-1/2 my-auto'>
              <div className='pl-10 pb-4'>
                <h1 className='text-lg'>Priority Guide:</h1>
                <p>
                  You might be confused by how to correctly set a tickets
                  urgency. No worries, see below for some guidelines.
                </p>
              </div>
              <QuickTable
                list={Data.urgency_list}
                labels={Data.urgency_labels}
              />
            </div>
            <div className='w-1/3 border-[1px] border-black'>
              {/*<img className='' src={priority} alt='Priority' />*/}
              <p className='text-center bg-slate-200'>
                Select the priority here.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className='flex justify-around'>
            <div className='w-1/2 my-auto'>
              <div className='pl-10 pb-4'>
                <h1 className='text-lg'>Assignment Guide:</h1>
                <p>
                  Another section that may confuse you is the 'Assigned to'
                  section. See below for a guide on this.
                </p>
              </div>
              <QuickTable
                list={Data.assignment_list}
                labels={Data.assignment_labels}
              />
            </div>
            <div className='w-1/3 border-[1px] border-black'>
              {/*<img src={assignment} alt='Assignment' />*/}
              <p className='text-center bg-slate-200'>
                Select the team assignment here.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className='mx-14'>
            <h1 className='text-lg underline'>Keep in mind the following:</h1>
            <div>
              <ul className='list-disc'>
                <li className='font-semibold'>
                  Take detailed notes on the interaction
                </li>
                <p className='text-sm pb-2'>
                  Remember that these tickets are meant to serve the team, so
                  you will want to take good notes. Key pieces of information
                  gained from the interaction should be shown in your notes.
                  <br />
                  Key pieces of information include: What type of hardware, what
                  type of app, is the issue recurring, What caused the issue,
                  What type of network setup, contact info, etc.
                </p>
                <li className='font-semibold'>
                  Close the ticket as resolved when applicable
                </li>
                <p className='text-sm pb-2'>
                  Make sure that you close tickets when they are resolved to
                  avoid cluttering the ticket system. If you are unsure of the
                  status of a ticket, you can ask the person who made it or
                  reach out to the merchant to ask if they are still having
                  issues.
                </p>
                <li className='font-semibold'>
                  If you work on an existing ticket, leave a comment
                </li>
                <p className='text-sm pb-2'>
                  This is normally how you keep track of a ticket's status. This
                  is necessary for collaboration on issues, as going into an
                  ongoing investigation without relevent status, you are setting
                  yourself up for failure and the merchant may get frustrated.
                </p>
                <li className='font-semibold'>
                  You can write code in the description and steps text fields
                </li>
                <p className='text-sm pb-2'>
                  This is just a cool little side note.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShiftHandoff = () => {
  return (
    <div id={Data.links[3][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[3][1]} />
      <div className='bg-slate-100 text-left mx-5'>
        <p className='text-right pr-5 mb-5 bg-slate-400 text-white'>
          This section will cover how to make a shift handoff for the next
          shift.
        </p>
        <div className='flex justify-between mx-5'>
          <div>
            <p className='px-5'>
              Near the end of your shift, to wrap up the day, you will want to
              make a shift handoff. This serves the other teams with a concise
              outline of the status on interactions you have worked. <br />
              <br />
              The exact template that you use to organize this document is
              completely up to you, just make sure that it is easy to follow.
              <br />
              <br />
              It is important to keep the team up to speed on ongoing issues, so
              try to get into a habit of making this document as effective as
              possible by keeping the following in mind:
            </p>
            <ul className='list-disc mx-12 pt-4'>
              <li className='font-semibold'>Keep Entries short and concise</li>
              <p className='text-sm'>
                You will want a short and sweet description for each interaction
                that you include. The handoff is meant to give your mates a
                brief summary of what was taken care of while they were gone.
              </p>
              <li className='font-semibold'>Label the status correctly</li>
              <p className='text-sm'>
                If you take a look at the example handoff included to the right,
                right click and open in new window to see it better, you will
                notice the status at the end of each entry in bold.
                <br />
                Make sure the status you label the interaction with makes sense
                to how you left the interaction by the end of your shift.
              </p>
              <li className='font-semibold'>
                Attach any relevent links to each interaction
              </li>
              <p className='text-sm'>
                You will notice a couple links attached to most of the
                interactions in the example provided on this page. You will want
                to include any tickets, emails, collab tickets, or text thread
                links to the interactions that they apply to.
                <br />
                This provides easy access to relevent documents that could
                provide further context to each interaction, so this point is
                extremely important.
              </p>
              <li className='font-semibold'>
                Make sure to copy and paste what you wrote into an email for the
                team
              </li>
              <p className='text-sm'>
                To address the full support team, send the email to both
                'supportteam@getquantic.com' and 'support@getquantic.com'
              </p>
            </ul>
          </div>
          <div>
            <ImageContainer
              className='w-full'
              src={handoff}
              desc='Example of a Shift Handoff'
            />
          </div>
        </div>
        <div className='mx-10 mt-10 flex justify-around'>
          <div>
            <h1 className='text-2xl font-semibold text-center'>Status:</h1>
            <QuickTable labels={Data.status_labels} list={Data.status_list} />
          </div>
          <div>
            <h1 className='text-2xl font-semibold text-center'>
              Relevent Links:
            </h1>
            <QuickTable
              labels={Data.relevent_labels}
              list={Data.relevent_list}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareBasics = () => {
  return (
    <div id={Data.links[4][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[4][1]} />
      <div className='text-left mx-5 bg-slate-100'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover software troubleshooting basics.
        </p>
      </div>
      <div className='bg-slate-100 text-left mx-5 pb-5'>
        <h1 className='text-xl text-center underline'>Payment Gateways</h1>
        <p className='mx-14 mb-5'>
          Payment Gateways are what we use to create a link from a payment
          terminal to a POS station. There are a few different types that we
          will cover in this section, but for a full setup guide, please see the
          Gateway Setup article.
        </p>
        <QuickTable list={Data.gateway_list} labels={Data.gateway_labels} />
        <h1 className='text-xl text-center underline pt-5'>Our Apps</h1>
        <p className='mx-14'>
          We provide an extensive suite of software solutions to meet a variety
          of our merchants' POS needs. In this section we will give a breakdown
          of each product.
        </p>
        <h1 className='text-lg text-center mt-5'>Main Software</h1>
        <p className='mx-14'>
          The table below lists the main POS software that all of our merchants
          use on a regular basis. Other Articles will dive deeper into each one
          below.
        </p>
        <QuickTable list={Data.software_list} labels={Data.software_label} />
        <h1 className='text-lg text-center mt-5'>Additional Software</h1>
        <p className='mx-14'>
          Asside from the software that is listed above, we also have other
          software that is used a bit less frequently. In this section we will
          cover some of these solutions.
        </p>
        <QuickTable
          list={Data.additional_list}
          labels={Data.additional_labels}
        />
      </div>
    </div>
  );
};

const HardwareBasics = () => {
  return (
    <div id={Data.links[5][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[5][1]} />
      <div className='text-left mx-5 bg-slate-100'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover hardware troubleshooting basics.
        </p>
      </div>
      <div className='bg-slate-100 text-left mx-5 pb-5'>
        <p className='mx-5'>
          For a software company, we tend to troubleshoot a lot more than just
          software issues. In fact, most of your interactions will be issues
          related to hardware. It takes a lot of time and patience to get a good
          grasp of troubleshooting devices that you are not familiar with, so in
          this section we will cover the basics of hardware troubleshooting.
        </p>
        <h1 className='text-xl text-center underline'>
          Printer is not working
        </h1>
        <div className='flex justify-between pb-10'>
          <div className='w-1/2'>
            <h1 className='text-lg text-center underline'>
              Printer is not paired
            </h1>
            <ol className='list-decimal mx-10'>
              <li className='font-semibold'>Restart the printer</li>
              <p className='text-sm pb-2'>
                This will resolve the issue a lot of the time and doesn't take
                much time at all, so its never a bad idea to start here.
              </p>
              <li className='font-semibold'>
                Check if the printer is connected to the network
              </li>
              <p className='text-sm pb-2'>
                Certain printers will print a self-test slip when they boot.
                This slip will display the IP of the printer if it is connected
                to the network. If it does not print on start up, you may need
                to turn it off and hold the feed button while turning it back
                on.
                <br />
                ** If the slip prints an IP of 192.168.192.168, this means that
                the printer is not connected to the network **
              </p>
              <li className='font-semibold'>
                Make sure that the IP for the printer matches what is entered in
                the POS
              </li>
              <p className='text-sm pb-2'>
                You can see what IP is listed for this specific printer by
                locating it under Menu --- Hardware --- Printers ---{'>'} IP:
                _____. If the IP listed is different from the one listed on the
                self-test slip, you can change it by editing what is listed
                here. Doing so should fix the pairing as long as both devices
                are on the same network.
              </p>
              <li className='font-semibold'>
                Make sure that iPad/Station is on the correct network
              </li>
              <p className='text-sm pb-2'>
                To check that the POS station is on the correct network, you
                will need to navigate to the device's settings app. For IOS, the
                section to view the connected network is called 'Wifi Settings'
                and to check that both devices are on the same network, you need
                to click on the info icon next to the network name. From here
                locate the IPv4 Address and match the range with the IP for the
                printer.
                <br />
                If the station is an Android, it will be the same process,
                except the settings section to look for is labeled 'Network and
                Internet'. You might also be prompted to input a password on pax
                stations. This password will default to '9876', 'pax9876@@', or
                the current date in MMDDYYYY format.
              </p>
              <li className='font-semibold'>
                If all steps above fail, you will want to escalate the issue
              </li>
            </ol>
          </div>
          <div className='w-1/2'>
            <h1 className='text-lg text-center underline'>
              Printer is not online
            </h1>
            <ol className='list-decimal mx-10'>
              <li className='font-semibold'>
                Identify if connected via ethernet or wifi
              </li>
              <p className='text-sm pb-2'>
                If ethernet: locate the device that it is connected to. (Router
                or Switch)
                <br />
                If wifi: Locate the nearest access point.
              </p>
              <li className='font-semibold'>Try restarting the printer</li>
              <p className='text-sm pb-2'>
                This will refresh the network connection.
              </p>
              <li className='font-semibold'>
                If ethernet: Try a different port
              </li>
              <p className='text-sm pb-2'>
                Sometimes ports on switches/routers will go bad. Try another
                portal on the network device and check if the printer connects
                by running a self-test.
              </p>
              <li className='font-semibold'>
                If ethernet: Try a different cable
              </li>
              <p className='text-sm pb-2'>
                You would be surprised by how often you will run into bad
                ethernet cables. Check the connection with a different cable if
                previous steps were unsuccessful.
              </p>
              <li className='font-semibold'>
                If ethernet: Check if it shares a switch with other devices and
                check their connection status
              </li>
              <p className='text-sm pb-2'>
                If you notice that all other ethernet devices connected to the
                switch are also offline, chances are that the switch is not
                sensing an uplink. In this scenario, you can usually fix this by
                power cycling the switch. If that doesn't fix it, you can also
                try restarting the router if they don't mind the network going
                down.
                <br />
                If the switch does not come back online after both itself and
                the router were restarted, have the merchant call their ISP to
                investigate their equipment before replacing the switch.
              </p>
              <li className='font-semibold'>
                If Wifi: Check proximity to nearest Access Point
              </li>
              <p className='text-sm pb-2'>
                If within the same room at less than 20-25 feet, it should still
                be fine on the 5G band. This band provides a quicker network
                connection, but has a drastically shorter range than 2.4G.
                <br />
                If over 25 feet/outside of the room, you might have better luck
                connecting the printer to the 2.4G band. This will provide a
                slower speed, but provide a stronger/more reliable signal to the
                printer.
              </p>
              <li className='font-semibold'>
                If all else fails, try a factory default reset
              </li>
              <p className='text-sm pb-2'>
                To do so check on the model specific process on google. Most of
                the time you need to turn the printer off --- hold the reset
                button with a pen ---{'>'} turn the printer back on while
                holding the reset button.
              </p>
              <li className='font-semibold'>
                Everything is situational, so keep trying. Escalate or replace
                if necessary.
              </li>
            </ol>
          </div>
        </div>
        <h1 className='text-xl text-center underline'>
          Card Reader is not working
        </h1>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <h1 className='text-lg text-center underline'>
              Card Reader is not paired
            </h1>
            <ol className='list-decimal mx-10'>
              <li className='font-semibold'>Restart the reader</li>
              <p className='text-sm pb-2'>
                Restarting a card reader when it is not working correctly will
                resolve the issue 9 times out of ten. This is a quick thing to
                try, so do it first.
              </p>
              <li className='font-semibold'>
                Make sure it is connected to network
              </li>
              <p className='text-sm pb-2'>
                One main reason for a card reader not pairing with the system,
                could be that it is not connected to the network. Always check
                this as one of your first steps.
                <br />
                To do so, you will need to go into the device settings and
                locate the tab labeled 'Network and Internet.' You may be locked
                out of the device settings, but usually you can get through the
                password prompt with either pax9876@@ or 9876 on pax devices.
                Other devices usually use the current date in MMDDYYYY, if they
                are password protected at all.
              </p>
              <li className='font-semibold'>
                Make sure it is connected to the right network
              </li>
              <p className='text-sm pb-2'>
                Not only should the reader always be connected to the internet,
                but it should also always be connected to the correct network.
                All POS devices, asside from a few exceptions, should be on the
                same network. Our system only communicates between devices on
                the LAN.
                <br />
                To verify that the network is the same for two or more devices,
                compare their IP range. This will be the first three sections of
                the IP separated by '.'. For example, the range of the IP
                address 192.168.0.1 would be 192.168.0.
              </p>
              <li className='font-semibold'>
                Make sure that the Reader's IP matches what is in our system
              </li>
              <p className='text-sm pb-2'>
                The easiest way for merchants to check this would be in the
                left-side menu in the POS. From here, they need to navigate to
                Hardware ---{'>'} Card Readers and find the IP address listed in
                the page that populates. They can also change the value in this
                entry to match the IP of the reader. After doing so, have them
                test with a penny transaction.
                <br />
                Certain readers will not show up in this section of the app, so
                in that case we can check the setting on our end in the partner
                portal. Pull up the account and locate the 'Stations' tab. In
                here, select the lock icon connected to the affected
                station/terminal. This will pull up a form that has an entry to
                change the IP address for the payment gateway. Change the
                address, have them refresh, then try a test transaction.
              </p>
              <li className='font-semibold'>Check the communication type</li>
              <p className='text-sm pb-2'>
                Usually if this is set incorrectly you will receive some kind of
                error message along the lines of 'receive error'. If this
                message populates, you can change the communication type in Tsys
                under the 'Communication' tab. If the device is paired with a
                station, this should always be set to 'HTTP GET'. If it is
                standalone, the communication type will need to be set to
                'tcp/ip'.
              </p>
            </ol>
          </div>
          <div className='w-1/2'>
            <h1 className='text-lg text-center underline'>
              Card Reader is not online
            </h1>
            <ol className='list-decimal mx-10'>
              <li className='font-semibold'>Restart the Card Reader</li>
              <p className='text-sm pb-2'>
                If it hasn't been stated enough, this is a quick and easy first
                step that you should always take.
              </p>
              <li className='font-semibold'>
                Forget the network and reconnect
              </li>
              <p className='text-sm pb-2'>
                This is a bit quicker than a full restart in some cases, and it
                will give the device a fresh connection to the network. I find
                its best to forget the network --- restart device ---{'>'}{' '}
                reconnect to the network, as this seems to fix situations where
                it seems all hope is lost.
              </p>
              <li className='font-semibold'>If ethernet: Switch ports</li>
              <p className='text-sm pb-2'>
                Trying a different port on the router/switch the device is
                connected to will allow you to check if the port is just not
                working. Always try this if restarting and forgetting the
                network does not fix the connection.
              </p>
              <li className='font-semibold'>
                If ethernet: Swap ethernet cable
              </li>
              <p className='text-sm pb-2'>
                Ethernet cables tend to get roughed up, especially in
                restaurants. Even sometimes out of nowhere they will stop
                working, so it is always good to check the connection with
                another cable if possible. If it doesn't interrupt operations
                they can try one of the working cables connected to a different
                device.
              </p>
              <li className='font-semibold'>
                If ethernet: Check on the switch
              </li>
              <p className='text-sm pb-2'>
                If it comes down to this step, you can check on the
                switch/router that the reader is connected to. Usually these
                devices give LED feedback on their connection status near the
                ports. If you notice that other devices on the same switch are
                not connecting either, chances are the switch is not sensing an
                uplink. A restart usually fixes this, but if it doesn't, I would
                suggest reaching out to the ISP to do remote testing on their
                equipment. Even if the switch is not provided by them, the
                device that the switch is connected to can be tested by them.
              </p>
              <li className='font-semibold'>
                If Wifi: Check proximity to access point
              </li>
              <p className='text-sm pb-2'>
                Remember that the main difference between the two wifi bands,
                2.4 and 5G, is their range and stability. If a device is more
                than 25 ft from the nearest AP, or in a different room, they
                should be on the 2.4G band. The 5G band will provide a faster
                speed, but has a much shorter range and doesn't travel through
                solid walls very well.
              </p>
            </ol>
          </div>
        </div>

        {/* STATIC IP SECTION */}
        <div className='mt-14'>
          <div className='text-center w-[80%] mx-auto'>
            <h1 className='font-semibold text-xl'>
              Setting Static IP Addresses
            </h1>
            <p>
              Keep in mind that while the iPads and stations don't necessarily
              need a static IP, but printers and card readers do. Please follow
              the guide below to learn how to set these up.
            </p>
          </div>
          <div className='flex justify-around'>
            <div className='w-[30%] mt-10'>
              <h1 className='text-lg font-semibold text-center'>
                Card Readers
              </h1>
              <ol className='list-decimal'>
                <li>Open settings</li>
                <li>Type in the default PAX password – pax9876@@</li>
                <li>Tap ethernet</li>
                <li>Enable ethernet</li>
                <li>
                  scroll down to the botton and tap Ethernet Configuration
                </li>
                <li>Select Static IP</li>
                <li>Enter in your IP address</li>
                <li>Enter in your Netmask</li>
                <li>Enter in your Gateway</li>
                <li>Enter in your DNS server</li>
                <li>Push save!</li>
              </ol>
            </div>
            <div className='w-[30%] mt-10'>
              <h1 className='text-lg font-semibold text-center'>Printers</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div id={Data.links[6][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[6][1]} />
      <div className='text-left mx-5 bg-slate-100'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover our partners.
        </p>
      </div>
      <div className='bg-slate-100 text-left mx-5 pb-5'>
        <h1 className='text-xl text-center underline'>List of Partners</h1>
        <div className='flex justify-between mx-auto'>
          <div className='ml-10 px-5'>
            <ul className='list-disc'>
              <li>Payroc - (888) 477-4500</li>
              <li>Maverick Payments - (800) 276-2780</li>
              <li>PayBright - (877) 276-2780</li>
              <li>Quantum</li>
              <li>Evalon</li>
              <li>First Data</li>
              <li>(W) Phase 3 Payments</li>
              <li>(W) Vlore POS</li>
              <li>(W) Axe Payments (Torch)</li>
              <li>(W) Vivid</li>
            </ul>
          </div>
          <div className='w-1/2 my-auto'>
            <QuickTable list={Data.rekey_list} labels={Data.rekey_labels} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Terminology = () => {
  return (
    <div id={Data.links[7][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[7][1]} />
      <div className='text-left mx-5 bg-slate-100 pb-5'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover some of our frequently used terminology.
        </p>
      </div>
      <div className='bg-slate-100 text-left mx-5 pb-5'>
        <QuickTable list={Data.term_list} labels={Data.term_labels} />
      </div>
    </div>
  );
};

const SupportProcesses = () => {
  return (
    <div id={Data.links[8][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[8][1]} />
      <div className='text-left mx-5 bg-slate-100'>
        <p className='text-right pr-5 bg-slate-400 text-white'>
          This section will cover the technical support processes we use each
          day.
        </p>
      </div>
      <div className='bg-slate-100 text-left mx-5 px-5 pt-5'>
        <p>
          Here in support we handle many different types of issues that
          merchants have. Most of the time you will not be familiar with how to
          handle a lot of situations, since every call is different than the
          last. It takes time to become confident with your knowledge of our
          product suite.
        </p>
        <br />
        <p className='pb-10'>
          That being said, We do have a few more common issues that we might
          face on a daily basis. This section will cover a lot of these common
          scenarios. See below for a list of a few common issues and how to
          handle them.
        </p>
        <h1 className='ml-5 font-bold'>
          Customer asks for account info or changes to an account
        </h1>
        <p className='pb-5'>
          If a caller ever asks for account information like their username and
          password, or if they want to make changes on the account, you should
          always verify their connection to the merchant. Sometimes this is
          tricky with accounts that are missing certain key pieces of
          identifying info, but if you can't think of a way to verify their
          identity, you can always try reaching the owner or the restaurant if
          need be.
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant needs help closing the batch
        </h1>
        <p className='pb-5'>
          Merchants are always confused on the process of closing their batch.
          Luckily this is a fairly simple process through the POS. <br />
          The option for this is located from the left-side menu, accessed by
          tapping the hamburger icon in the top-left corner of the screen. From
          this menu, go to 'POS Operations' --- 'Batch Operations' ---{'>'}{' '}
          'Close Batch'.
          <br />
          <br />
          Keep in mind that the easiest way to check if a batch is closed, have
          them use the process above to close the batch manually. If the press
          'Close Batch' and the system says Batch not found, the batch should be
          closed.
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant wants to check on/change Auto Batch Close Time
        </h1>
        <p className='pb-5'>
          You can check and change their batch close time in the portal by
          searching 'Batch Close Time' in settings. This setting will allow you
          to make changes to the time the batch is closed automatically each
          day. Keep in mind that if they are trying to batch through our system,
          they need to leave the device online, awake, and running the POS app
          at the time of closure for it to work.
          <br />
          <br />
          You can also check/change the batch close time through Tsys/BroadPOS
          on pax devices in the pax store. Just search the terminal's Serial
          Number and pull up the parameter .zip file for the build. From here
          the setting will be under the TSYS tab, so scroll down until you see
          the only mention of Batch in the form to check if this is enabled and
          what time it is set to.
          <br />
          ** If you need to make changes to Tsys/BroadPOS settings, make sure
          that the batch is closed before pushing a new build to the terminal.
          **
        </p>
        <h1 className='ml-5 font-bold'>Merchant's Terminal is Offline</h1>
        <p className='pb-5'>
          If a merchant is calling about a device that is offline, you can
          verify this by checking the pax store for pax devices. All other
          devices, you will need to check from the device's settings.
          <br />
          For iPads, you will want to go into the section in settings labeled
          'Wifi'. In here you just need to see if it is connected to the same
          network as the other POS devices. To do this, you just need to tap on
          the blue ί icon next to the network they are connected to. This will
          pull up a new page where we need to find the section labeled 'IP v4'
          and locate the IP address listed here. To verify they are on the same
          network, check the first 3 sections separated by '.', as this will
          always be the same as other devices on the same network.
          <br />
          For Android devices, the process is pretty similar. You need to go
          into the settings app and locate the section labeled 'Network and
          Internet'. From here, check that they are on the correct network in
          the same fashion, by checking the IP range.
        </p>
        <h1 className='ml-5 font-bold'>Multiple devices fell offline</h1>
        <p className='pb-5'>
          If a merchant calls with more than one of their devices falling
          offline, you should check to see if they are connected via ethernet on
          the same switch. The same can be said about wifi if all wifi devices
          fell off the network.
          <br />
          Typically you can fix a connection issue like this by power cycling
          the point of failure. Either the switch or the router. If its only
          affecting ethernet devices though, you should only cycle the affected
          switch, as to not take the whole network down.
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant is getting a 500 server error
        </h1>
        <p className='pb-5'>
          A 500 Server error indicates an issue with the server that you are
          trying to access. This means that you should verify from your end to
          see if you get the same error when accessing the page. If you do, the
          server is probably unreachable, so contact the necessary parties to
          check on it.
          <br />
          <br />
          ** Never tell the customer that the server is down or that it is
          having issues. Instead just tell them that we will look into the issue
          and get back to them shortly **
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant is requesting to adjust tips
        </h1>
        <p className='pb-5'>
          If a merchant asks you to apply tips for them, chances are they are
          probably having issues doing so themselves. Under normal
          circumstances, to apply tips to a paid order, you do so from the 'Tips
          Section' located in the left-side menu in the POS. Just find the order
          that needs the tip added in the list and tap on 'Edit' or 'Add' to
          adjust the tip.
          <br />
          <br />
          If you are facing issues adding tips to the order, pay attention to
          the error it gives you and check
          <a
            className='hover:text-cyan-400 text-cyan-600'
            href='/articles/ErrorGuide.js'
          >
            {' '}
            this article here
          </a>{' '}
          to see the solution. If the error is not listed, create a collab with
          an image of the error message for level 3 to investigate.
          <br />
          <br />
          Another thing to try would be the 'Resale' function. This will
          overwrite the original transaction with a new one and may clear up
          errors that they are having.
          <br />
          <br />
          The last resort would be to have the processor rekey the transaction
          to add tips. This will be your only option if the batch is already
          closed for the transaction. To do so either send them an email with
          the transaction details, or reach out to them over the phone directly.
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant needs Tsys settings password
        </h1>
        <p className='pb-5'>
          Usually the password is set to 0601, but you can also try 1234 or the
          current date in MMDDYYYY format.
        </p>
        <h1 className='ml-5 font-bold'>
          Merchant needs Pax device settings password
        </h1>
        <p className='pb-5'>
          This will either be 9876 or pax9876@@ by default.
        </p>
        <h1 className='ml-5 font-bold'>Inventory is not tracking for items</h1>
        <p className='pb-5'>
          This is usually caused by having the item setting for inventory
          tracking disabled. To fix this so the system tracks the quantity of
          items as they sell, go to the settings for the item in question and
          enable 'Inventory Tracking' under the Inventory tab.
        </p>
        <h1 className='ml-5 font-bold'>
          Reference number and Order number are not the same
        </h1>
        <p className='pb-5'>
          This will happen for a few reasons. Firstly this may be due to the
          setting 'reset order number' being selected through POS Operations.
          This will reset the order number back to 1, but the reference numbers
          will continue counting unaffected by the change.
          <br />
          <br />
          Another reason there is a difference is because when checks are split,
          they will split off into different order numbers, but all will reflect
          the same Reference number. In this situation, the order number will
          continue counting, while the reference number stays stagnant.
          <br />
          <br />
          The final reason is due to network/syncing issues. If two different
          devices aren't communicating correctly in the POS system, this could
          cause duplicate reference numbers and sometimes duplicate order
          numbers. This is usually caused by network issues between devices, but
          also sometimes is caused by server load problems.
        </p>
        <h1 className='ml-5 font-bold'>System is being slow</h1>
        <p className='pb-5'>
          This is a pretty common issue among our merchants, and 99% of the time
          this is caused by bandwidth over-consumption. That means that the
          internet speed is not up to par with their processing needs. Ask the
          merchant to run a speed test from one of the affected terminals.
          Depending on how many devices are connected to the network, their
          speeds should always at least be above 50mbps dl/15mbps ul on the low
          end. This speed should suffice for merchants with 2-4 listed stations
          as a general rule of thumb.
          <br />
          <br />
          If their speeds seem fine to you, you can have them try restarting one
          of the networking devices closest to the devices in question. Avoid
          restarting the single points of failure while they are still open, as
          taking the whole network down could cause way more issues than it
          resolves.
          <br />
          <br />
          If they notice slower speeds when they are busy, you can suggest power
          cycling the router once every few days to increase throughput. This
          will clear out a majority of junk cache data that could cause
          slowdowns.
        </p>
        <h1 className='ml-5 font-bold'>What is a House Account?</h1>
        <p className='pb-5'>
          A house account is a way of keeping a long running tab to be paid at a
          later date. You can set this up for specific customers in the
          Customers section of the app. You will need to create a deposit item
          to attach to any customer who would like to use a house account.
          <br />
          <br />
          House account deposits can be paid out at any time, by pulling up the
          customer's profile in the POS and selecting the 'Pay' button that
          populates. Then you can charge the amount due in their profile to a
          payment method of their choice.
        </p>
        <h1 className='ml-5 font-bold'>
          Certain functions asking for manager PIN
        </h1>
        <p className='pb-5'>
          Merchants will sometimes run into a prompt to input a manager PIN when
          using certain features. This happens when the employee or role does
          not have permission to access said feature. To enable access to the
          feature, you will need to navigate to the 'Access Management' section
          in their portal. Once there, select a role that you are enabling
          access for and it will pull up a page with a bunch of different
          permissions that you can allow access to.
          <br />
          <br />
          To find the one that you are looking for, use CTRL + F to keyword
          search through the page. Keep in mind that some permissions are
          redundant, so select each that apply. Also check to make sure that
          there isn't a permission conflict, where a permission is labeled as
          'Disable _____'. After making the change, have the merchant refresh
          the app.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSupport;