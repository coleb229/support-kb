import ArticleHeader from '../components/ArticleHeader.js';
import References from '../components/References.js';
import PageNav from '../components/PageNav.js';
import ImageContainer from '../components/ImageContainer.js';
import SubHeader from '../components/SubHeader.js';
// image imports
/*
import unifi from '../assets/unifi.JPG';
import unifi1 from '../assets/unifi1.JPG';
import unifi2 from '../assets/unifi2.JPG';
import unifi3 from '../assets/unifi3.JPG';
import unifi4 from '../assets/unifi4.JPG';
import unifi5 from '../assets/unifi5.JPG';
import unifi6 from '../assets/unifi6.JPG';
import unifi7 from '../assets/unifi7.JPG';
import switch1 from '../assets/switch1.JPG';
import switch2 from '../assets/switch2.JPG';
import switch3 from '../assets/switch3.JPG';
import vault1 from '../assets/vault1.JPG';
import vault2 from '../assets/vault2.JPG';
import vault3 from '../assets/vault3.JPG';
import vault4 from '../assets/vault4.JPG';
import vault5 from '../assets/vault5.JPG';
import vault6 from '../assets/vault6.JPG';
import vault7 from '../assets/vault7.JPG';
import vault8 from '../assets/vault8.JPG';
import vault9 from '../assets/vault9.JPG';
import vault10 from '../assets/vault10.JPG';
import vault11 from '../assets/vault11.JPG';
import vault12 from '../assets/vault12.JPG';
import vault13 from '../assets/vault13.JPG';
import vault14 from '../assets/vault14.JPG';
import vault15 from '../assets/vault15.JPG';
import m1 from '../assets/m1.JPG';
import m2 from '../assets/m2.JPG';
import m3 from '../assets/m3.JPG';
import m4 from '../assets/m4.JPG';
import m5 from '../assets/m5.JPG';
import m6 from '../assets/m6.gif';
import m7 from '../assets/m7.gif';
import m8 from '../assets/m8.JPG';
import m9 from '../assets/m9.JPG';
import cd1 from '../assets/cd1.JPG';
import cd2 from '../assets/cd2.JPG';
import cd3 from '../assets/cd3.JPG';
import cd4 from '../assets/cd4.JPG';
import u1 from '../assets/u1.JPG';
import u2 from '../assets/u2.JPG';
import u3 from '../assets/u3.JPG';
import u4 from '../assets/u4.JPG';
import u5 from '../assets/u5.JPG';
import u6 from '../assets/u6.JPG';
import u7 from '../assets/u7.JPG';
import u8 from '../assets/u8.JPG';
import u9 from '../assets/u9.JPG';
import u10 from '../assets/u10.JPG';
import u11 from '../assets/u11.JPG';
import voo1 from '../assets/voo1.JPG';
import voo2 from '../assets/voo2.JPG';
import voo3 from '../assets/voo3.JPG';
import voo4 from '../assets/voo4.JPG';
import voo5 from '../assets/voo5.JPG';
*/
// data import
import Data from '../data/Installs.data.js';

const Installs = () => {
  return (
    <div>
      <ArticleHeader title='POS Terminal Install Guide' />
      <div className='flex justify-around'>
        <div className='max-w-[350px]'>
          <PageNav links={Data.links} />
        </div>
        <div className='w-[60%] bg-slate-100'>
          <div id='references' className='py-4'>
            <References list={Data.references} />
          </div>
          <h1 className='text-xl py-5 underline font-semibold'>
            INSTALLATION GUIDE FOR RESTAURANT POS TERMINAL
          </h1>
          <Unifi />
          <NetworkSwitch />
          <Vault />
          <M30 />
          <CD />
          <U220 />
          <Dejavoo />
        </div>
      </div>
    </div>
  );
};

const Unifi = () => {
  return (
    <div>
      <UnifiRouter />
      <UnifiAC />
    </div>
  );
};

const UnifiRouter = () => {
  return (
    <div>
      <SubHeader title={Data.links[0][1]} section={Data.links[0][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Unifi Dream Machine
        </h1>
        <div className='w-1/2 mx-auto'>
          {/*<ImageContainer src={unifi} />*/}
        </div>
        <div className='py-10 text-left'>
          <div className='flex justify-between'>
            <div className='px-10 w-full'>
              <ol className='list-decimal'>
                <li className='pt-2'>Connect the Dream Machine to Power</li>
                <div className='w-2/3 mx-auto'>
                  {/*<ImageContainer src={unifi1} />*/}
                </div>
                <li className='pt-2'>
                  Use the Port with a Blue Connect the Dream Machine to the
                  internet
                </li>
                <div className='w-2/3 mx-auto'>
                  {/*<ImageContainer src={unifi2} />*/}
                </div>
                <li className='pt-2'>Wait for the Device to Start Up</li>
                <li className='pt-2'>
                  Connect any Additional Devices to the Remaining Ports
                </li>
                <div className='w-2/3 mx-auto'>
                  {/*<ImageContainer src={unifi3} />*/}
                </div>
              </ol>
            </div>
            <div className='px-10 my-auto'>
              <h1 className='text-lg font-semibold text-center'>FAQ</h1>
              <ol className='list-decimal py-5'>
                <li className='pt-2'>
                  How do I know that the device has finished starting up?
                </li>
                <p className='text-sm'>
                  The light ring at the top of the device will turn blue.
                </p>
                <li className='pt-2'>
                  I plugged in the device and waited for it to finish starting
                  up, but I am still not getting an internet connection.
                </li>
                <p className='text-sm'>
                  Please double check that the cable plugged into the port with
                  a blue icon above it is securely connected to a working modem.
                  If this still does not work please check that the modem is
                  providing a connection.
                </p>
                <li className='pt-2'>How to I access my Unifi Dashboard</li>
                <p className='text-sm'>
                  Please reach out to support for this information
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UnifiAC = () => {
  return (
    <div className='border-t-2 border-black'>
      <h1 className='text-xl font-semibold text-center pb-10 pt-5'>
        Unifi MESH AC Access Point
      </h1>
      <div className='w-1/4 mx-auto'>
        {/*<ImageContainer src={unifi4} />*/}
      </div>
      <div>
        <ol className='list-decimal mx-10 mb-10 text-left'>
          <li className='pt-2'>Remove the Port Cover</li>
          <div className='w-1/4'>
            {/*<ImageContainer src={unifi5} />*/}
          </div>
          <li className='pt-2'>
            Connect the Access Point to the POE Injector Using the Red Port. It
            may simply be labeled as ‘POE’.
          </li>
          <div className='w-[40%]'>
            {/*<ImageContainer src={unifi6} />*/}
          </div>
          <li className='pt-2'>
            Provide the POE Injector with connection to the internet
          </li>
          <div className='w-[40%]'>
            {/*<ImageContainer src={unifi7} />*/}
          </div>
          <li className='pt-2'>Connect the POE Injector to Power</li>
          <li className='pt-2'>Wait for the Device to Start Up</li>
        </ol>
      </div>
    </div>
  );
};

const NetworkSwitch = () => {
  return (
    <div>
      <SubHeader title={Data.links[1][1]} section={Data.links[1][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for Network Switch
        </h1>
        <div className='text-left'>
          <p className='font-semibold'>
            Note: Each POS Terminal will have its own dedicated network switch.
            Generally, each network switch will have the following connections:
          </p>
          <ol className='list-decimal mx-10 pb-5'>
            <li className='pt-2'>Connection to network</li>
            <li className='pt-2'>Connection to Receipt Printer</li>
            <li className='pt-2'>Connection to iPad (if hardwired)</li>
            <li className='pt-2'>Connection to Card Reader</li>
          </ol>
          <div className='border-t-2 border-black'>
            <h1 className='text-lg my-5 font-semibold'>
              Self Installation for Network Switch
            </h1>
            <ol className='list-decimal mx-14 pb-5'>
              <li className='pt-2'>
                Plug in the power cable to the back of the network switch.
              </li>
              <div className='w-1/2'>
                {/*<ImageContainer src={switch1} />*/}
              </div>
              <li className='pt-2'>
                Plug in the power cable to the power outlet
              </li>
              <div className='w-1/2'>
                {/*<ImageContainer src={switch2} />*/}
              </div>
              <li className='pt-2'>
                Use ethernet cable to connect router with network switch
              </li>
              <div className='w-1/2'>
                {/*<ImageContainer src={switch3} />*/}
              </div>
              <li className='pt-2'>
                Connect the ethernet cable to SW1 port on router
              </li>
              <li className='pt-2'>
                Solid green light must be on after connecting
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vault = () => {
  return (
    <div>
      <SubHeader title={Data.links[2][1]} section={Data.links[2][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for iPad with VAULT Enclosure
        </h1>
        <p className='pb-5'>Note: Phillips Head Screw Driver Required</p>
        <div className='text-left'>
          <ol className='list-decimal mx-10'>
            <li className='mt-6'>Remove the iPad from the box </li>
            <li className='mt-6'>
              Open VAULT box and remove all the parts for the base to start
              assembling.
            </li>
            <li className='mt-6'>Unscrew the backplate for the iPad.</li>
            <div className='flex justify-between w-2/3 mx-auto'>
              {/*<ImageContainer src={vault1} />*/}
              {/*<ImageContainer src={vault2} />*/}
            </div>
            <li className='mt-6'>
              Attach backplate to mount it flat on the base using a screwdriver.
            </li>
            <div className='flex justify-between w-2/3 mx-auto'>
              {/*<ImageContainer src={vault3} />*/}
              {/*<ImageContainer src={vault4} />*/}
            </div>
            <li className='mt-6'>
              Place the front plate on the front of the iPad.
            </li>
            <div className='flex justify-between w-2/3 mx-auto'>
              {/*<ImageContainer src={vault5} />*/}
              {/*<ImageContainer src={vault6} />*/}
            </div>
            <li className='mt-6'>
              Place the iPad and front plate on the base to mount it together
              using a screwdriver.
            </li>
            <div className='w-1/3 mx-auto'>
              {/*<ImageContainer src={vault7} />*/}
            </div>
            <li className='mt-6'>
              Connect the Ethernet-USB adapter and the iPad charger to the iPad
              adapter.
            </li>
            <div className='w-1/3 mx-auto'>
              {/*<ImageContainer src={vault8} />*/}
            </div>
            <li className='mt-6'>Connect the assembly to the iPad.</li>
            <div className='w-1/3 mx-auto'>
              {/*<ImageContainer src={vault9} />*/}
            </div>
            <li className='mt-6'>
              Insert the top of the wire management to the base in the back.
            </li>
            <div className='flex justify-between w-2/3 mx-auto'>
              {/*<ImageContainer src={vault10} />*/}
              {/*<ImageContainer src={vault11} />*/}
            </div>
            <li className='mt-6'>
              Insert the bottom of the wire management to the bottom of the
              base.
            </li>
            <div className='flex justify-between w-2/3 mx-auto'>
              {/*<ImageContainer src={vault12} />*/}
              {/*<ImageContainer src={vault13} />*/}
            </div>
            <li className='mt-6'>
              Connect an ethernet cable from the iPad stand to network switch.{' '}
            </li>
            <div className='w-1/3 mx-auto'>
              {/*<ImageContainer src={vault14} />*/}
            </div>
          </ol>
          <p className='mt-14 font-semibold text-center'>
            Here’s an example of the setup:
          </p>
          <div className='w-1/3 mx-auto'>
            {/*<ImageContainer src={vault15} />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

const M30 = () => {
  return (
    <div>
      <SubHeader title={Data.links[3][1]} section={Data.links[3][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for Receipt Printer TM-m30
        </h1>
        <div className='text-left'>
          <ol className='list-decimal mx-10'>
            <li className='pt-6'>Unpack the box and remove the printer</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<src={m1* />*/}
            </div>
            <li className='pt-6'>Connect Power Cord to Power Adapter </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m2} />*/}
            </div>
            <li className='pt-6'>
              Connect the other end of the cord to the power outlet.
            </li>
            <li className='pt-6'>Connect the Power Adapter to the printer.</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m3} />*/}
            </div>
            <li className='pt-6'>Connect the Ethernet Cable to the printer</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m4} />*/}
            </div>
            <li className='pt-6'>
              Connect the Printer’s Ethernet Cable to the network switch.{' '}
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m5} />*/}
            </div>
            <li className='pt-6'>Open Printer cover</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m6} />*/}
            </div>
            <li className='pt-6'>
              Insert the printer paper with the feed coming from the bottom and
              close the cover. Leave excess receipt paper so the lid can close.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m7} />*/}
            </div>
            <li className='pt-6'>Turn on the printer</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m8} />*/}
            </div>
            <li className='pt-6'>
              Wait a few minutes for the printer to print the IP address.
              Printer has successfully been connected to the network.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={m9} />*/}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

const CD = () => {
  return (
    <div>
      <SubHeader title={Data.links[4][1]} section={Data.links[4][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for Cash Drawer
        </h1>
        <div className='text-left'>
          <ol className='list-decimal mx-10 py-5'>
            <li className='pt-6'>
              Flip the Cash Drawer so that the bottom is facing up. This will
              reveal a serial port connection.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={cd1} />*/}
            </div>
            <li className='pt-6'>
              Connect the Cash Drawer cable to the bottom of the Cash Drawer as
              shown
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={cd2} />*/}
            </div>
            <li className='pt-6'>
              Tighten the screws on the port so that it will stay connected to
              the Cash Drawer at all times.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={cd3} />*/}
            </div>
            <li className='pt-6'>
              Connect the other end of the Cash Drawer cable to the “Grey” port
              on the receipt printer. This port will usually be outlined in a
              White Square or is labeled as a Cash Drawer Port. If required, you
              may need to remove some panels from the printer by pulling it off.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={cd4} />*/}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

const U220 = () => {
  return (
    <div>
      <SubHeader title={Data.links[5][1]} section={Data.links[5][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for Kitchen Printer U220i
        </h1>
        <div className='text-left'>
          <ol className='list-decimal py-5 mx-10'>
            <li className='pt-6'>Unpack the box and remove the printer. </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u1} />*/}
            </div>
            <li className='pt-6'>
              Open the printer lid using the bottom latch
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u2} />*/}
            </div>
            <li className='pt-6'>Put the printer ribbon as demonstrated</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u3} />*/}
            </div>
            <li className='pt-6'>
              Tighten grey knob on the side to the right.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u4} />*/}
            </div>
            <li className='pt-6'>Close the bottom printer lid</li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u5} />*/}
            </div>
            <li className='pt-6'>
              Open the top printer lid using the top latch{' '}
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u6} />*/}
            </div>
            <li className='pt-6'>
              Put the printer paper in (shown in the printer)
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u7} />*/}
            </div>
            <li className='pt-6'>
              With excess printer paper left out, close the top of the printer
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u8} />*/}
            </div>
            <li className='pt-6'>
              Plug the power cable of the Kitchen printer to the power outlet
              and to the printer.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u9} />*/}
            </div>
            <li className='pt-6'>
              Use one end of ethernet cable to plug in the back as shown in the
              picture
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u10} />*/}
            </div>
            <li className='pt-6'>
              Use the other end of ethernet cable to plug in the switch
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={u11} />*/}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

const Dejavoo = () => {
  return (
    <div>
      <SubHeader title={Data.links[6][1]} section={Data.links[6][0]} />
      <div className='mx-14'>
        <h1 className='text-xl my-5 font-semibold text-ceneter'>
          Self Installation for Hardwired Dejavoo Card Readers
        </h1>
        <div className='text-left'>
          <p>
            <p className='font-semibold'>IMPORTANT:</p> Each Reader is
            Pre-Configured by our team. The Card Reader will only work if it is
            paired connected to the correct terminal. To know which terminal to
            pair a card reader to, look for the sticker on the reverse side of
            the reader. An image is shown below. Please reach out to support at
            610-810-1905 regarding any questions.
          </p>
          <div className='w-1/3 ml-[10%] mr-auto'>
            {/*<ImageContainer src={voo1} />*/}
          </div>
          <ol className='list-decimal mx-10 py-5'>
            <li className='pt-6'>
              Connect the power cable to the connector as shown.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={voo2} />*/}
            </div>
            <li className='pt-6'>
              Connect the ethernet cable to the connector.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={voo3} />*/}
            </div>
            <li className='pt-6'>
              Plug the other end of the ethernet cable to the network switch.
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={voo4} />*/}
            </div>
            <li className='pt-6'>
              Once connected, the terminal will display, “POS Online”
            </li>
            <div className='w-1/3 ml-[10%] mr-auto'>
              {/*<ImageContainer src={voo5} />*/}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Installs;