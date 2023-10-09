//components below
import ArticleHeader from '../components/ArticleHeader.js';
import PageNav from '../components/PageNav.js';
import SectionHeader from '../components/SectionHeader.js';
import References from '../components/References.js';
//images below
{/*}
import ip_error from '../../../public/assets/err.jpeg';
import listen_error from '../../../public/assets/listen-error.jpg';
import listen1 from '../../../public/assets/listen1.jpg';
import listen2 from '../../../public/assets/listen2.jpg';
import listen3 from '../../../public/assets/listen3.jpg';
import stations from '../../../public/assets/stations.jpg';
import tip_settings from '../../../public/assets/tip-settings.jpg';
*/}
// data import
import Data from '../data/ErrorGuide.data.js';

const ErrorGuide = () => {
  return (
    <div>
      <ArticleHeader title='Error Guide' />
      <div className='flex justify-between'>
        <div className='max-w-[300px]'>
          <PageNav links={Data.links} />
        </div>
        <div className='w-[80%] bg-slate-100'>
          <div id='references' className='py-4'>
            <References list={Data.references} />
          </div>

          {/* NOT ALLOWED ERROR SECTION */}
          <div id={Data.links[0][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[0][1]} />
            <p className='text-left mx-5'>
              Sometimes you may run into this error '793 - Not Allowed Error'
              when running a transaction on a payment terminal with a SIMPAY
              first data rapid connect VAR. Chris has found the solution to this
              error and put the answer in
              <a
                className='text-cyan-500 hover:text-cyan-400'
                rel='noreferrer'
                href='https://collab.metispro.com/Q58'
                target='_blank'
              >
                {' '}
                this ponder here.{' '}
              </a>
              Please take a look for some more info, but to fix this we need to
              have "'disableToken': 1" added into the payment gateway document
              for the account.
            </p>
          </div>

          {/* NOT ACTIVATED SECTION */}
          <div id={Data.links[1][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[1][1]} />
            <p className='text-left mx-5'>
              Sometimes when running transactions on a PAX device, you will be
              hit with a 'Not Activated' error. This error is related to the
              Gen2 Auth code in the TSYS file. To fix this error you need to
              access the Q20, or the CDS/card reader part of the device, and
              navigate to 'Host settings' ---- 'host register' ----{'>'}{' '}
              Activation.
              <br />
              <br />
              If this does not resolve the error, this is probably caused by an
              issue with the VAR Build itself.
              <br />
              <br />
              You can find the Ponder for this error{' '}
              <a
                className='text-cyan-500 hover:text-cyan-400'
                rel='noreferrer'
                href='https://collab.metispro.com/Q43'
                target='_blank'
              >
                {' '}
                Here
              </a>
            </p>
          </div>

          {/* LISTEN ERROR SECTION */}
          <div id={Data.links[2][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[2][1]} />
            <div className='flex justify-between'>
              <p className='text-left mx-5 my-auto'>
                Sometimes you will come upon a listen error on pax devices.
                Luckily we have a ponder for this specific error message. Below
                is a step-by-step guide on how you can fix this.
                <br />
                <br />
                You can visit the ponder Chris made for this{' '}
                <a
                  className='text-cyan-500 hover:text-cyan-400'
                  rel='noreferrer'
                  href='https://collab.metispro.com/Q40'
                  target='_blank'
                >
                  {' '}
                  Here
                </a>
              </p>
              {/*}
              <img
                className='bg-slate-300 w-1/6 hover:w-2/6 p-1 rounded m-5'
                src={listen_error}
                alt='listen_error'
              />
  */}
            </div>
            <div>
              <h1 className='text-lg text-left mx-5'>
                The steps to fix this error:
              </h1>
              <br />
              <ol className='list-decimal text-left mx-14'>
                <div className='flex justify-between w-[100%]'>
                  <div className='w-1/2'>
                    <li>Get into Tsys settings on the device in question:</li>
                    <p className='text-sm pt-7'>
                      You will need to get to the home screen on the device if a
                      different app is running. To do this, you can press the
                      circle icon at the bottom of the screen. From here you
                      need to find the app called Tsys Sierra, which will have a
                      blue background and TSYS in white on the icon.
                      <br />
                      <br />
                      You will probably be prompted for a password when entering
                      the settings section of the app by tapping on the icon in
                      the top-right hand corner of the screen. The password will
                      either be 'pax9876@@' or '9876' by defualt.
                    </p>
                  </div>
                  <div className='float-right'>
                    {/*}
                    <img
                      className='bg-slate-300 w-4/6 hover:w-full p-1 rounded m-1'
                      src={listen1}
                      alt='listen1'
                    />
  */}
                  </div>
                </div>
                <div className='flex justify-between w-[100%]'>
                  <div className='w-1/2'>
                    <li>
                      Locate the 'ECR Comm Settings' section in TSYS settings:
                    </li>
                    <p className='text-sm pt-7'>
                      You will need to locate the section in settings called
                      'ECR Comm Settings', which covers the communication type
                      that the app should be using.
                      <br />
                      <br />
                      ** Make sure to not mistake the section that you are
                      looking for with the 'communication' section, as they are
                      different. **
                    </p>
                  </div>
                  <div>
                    {/*}
                    <img
                      className='bg-slate-300 w-4/6 hover:w-full p-1 rounded m-1'
                      src={listen2}
                      alt='listen2'
                    />
  */}
                  </div>
                </div>
                <div className='flex justify-between w-[100%]'>
                  <div className='w-1/2'>
                    <li>
                      Make sure that 'ethernet' is selected, and none of the
                      other options:
                    </li>
                    <p className='text-sm pt-7'>
                      In here, you will want to make sure that 'Ethernet' is
                      enabled, even if the device is connected to wifi. This
                      will make the device work with an internet connection, and
                      not mistake it for bluetooth or USB.
                      <br />
                      <br />
                      ** Make sure that ethernet is the only setting enabled in
                      this section, otherwise the connection will not work. **
                    </p>
                  </div>
                  <div>
                    {/*}
                    <img
                      className='bg-slate-300 w-4/6 hover:w-full p-1 rounded m-1'
                      src={listen3}
                      alt='listen3'
                    />
  */}
                  </div>
                </div>
              </ol>
            </div>
          </div>

          {/* RECEIVE ERROR SECTION */}
          <div id={Data.links[3][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[3][1]} />
            <p className='text-left mx-5'>
              Sometimes when you run a payment on a pax terminal, you will
              receive a 'Receive Error'. This error indicates a breakdown of
              communication between the device and the processor. Sounds scary,
              but thankfully we have a Ponder post for this issue, which details
              how we can fix this.
              <br />
              <br />
              You can view the Ponder ticket{' '}
              <a
                className='text-cyan-500 hover:text-cyan-400'
                rel='noreferrer'
                href='https://collab.metispro.com/Q28'
                target='_blank'
              >
                {' '}
                Here
              </a>
              <br />
              <br />
            </p>
            <h1 className='text-lg text-left mx-5'>
              Here are a few reasons this error will populate, and how to
              address each scenario:
            </h1>
            <br />
            <ol className='list-decimal text-left mx-14'>
              <li>A typing error in the configuration</li>
              <p className='ml-4 text-sm'>
                -{'>'} Confirm that the MID and TID in BroadPOS matches the
                information on the VAR sheet.
              </p>
              <li>An outdated application on the PAX terminal</li>
              <p className='ml-4 text-sm'>
                -{'>'} You can check when the last update to the device was
                pushed under 'Operation History' in the pax store
              </p>
              <li>The connection could be blocked by a firewall</li>
              <p className='ml-4 text-sm'>
                -{'>'} Do not bother trying to fix this. Have the customer reach
                out to their ISP to address any kind of firewall issue
              </p>
            </ol>
          </div>

          {/* UNKNOWN ERROR NOT FOUND SECTION */}
          <div id={Data.links[4][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[4][1]} />
            <p className='text-left mx-5'>
              If you have ever tried to apply tips or make specific adjustments
              to an order in a closed batch, chances are you have seen this
              error. Many merchants will call in having issues adding or
              adjusting tips, and most of the time it is due to this error.
              Usually when they call in for this reason, it is due to the batch
              closing on them for one of two reasons.
              <br />
              <br />
              Firstly and most commonly in my experience it is because of their
              auto batch close time. You will need to check two places to find
              out if this is the cause, and to avoid this happening in the
              future, you will need to know where these settings can be found.
              <br />
              <br />
            </p>
            <ol className='list-decimal text-left mx-14'>
              <li>Search 'Batch Close Time' in their portal settings.</li>
              <p className='text-sm'>
                If they want to close their batch manually, this setting should
                not have a value. Otherwise, make sure that it is not set to a
                time earlier than they fully close for the night.
              </p>
              <li>
                Locate their terminal in the pax store and check the
                TSYS/BroadPOS parameter file
              </li>
              <p className='text-sm'>
                The section that the setting you are looking for belongs to is
                'TSYS' and the setting is named 'Auto Batch Mode'. if the
                respective value is set to 'Auto Batch Close', make sure that
                the time this is set for is after the business is fully closed
                out for the night.
              </p>
            </ol>
            <br />
            <br />
            <p className='text-left mx-5'>
              The only other reason the batch would have closed on them is due
              to user error. Especially in restaurant settings, terminals are
              passed back and forth and everyone is very busy and could somewhat
              easilly close the batch on accident. To stop this from happening
              in the future, you could disable certain employee roles from
              having access to the option to close the batch. You will find this
              permission in the portal, in the 'Access Control' section. From
              there, select the role(s) you wish to remove access for. The
              permission will be under 'Other' ---{'>'} 'Disable Batch Access'.
              Make sure to check both permissions for this, they will share the
              same name.
            </p>
          </div>

          {/* TRANSACTION MODE SECTION */}
          <div id={Data.links[5][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[5][1]} />
            <p className='text-left mx-5'>
              Some merchants will call in or reach out in the text line that are
              having issues making certain adjustments to orders, but they are
              running into an error that state 'You cannot adjust this order
              because it is in Transaction Mode'. The way to get around this
              error is pretty straight forward.
              <br />
              <br />
              If you take a look at the order in question, you will notice that
              it has some form of payment on it. Whether it is partial or full,
              you will need to refund any payment already made on the check to
              take the order out of Transaction Mode.
              <br />
              <br />
              Once all forms of payment have been removed from the order, you
              will be able to make changes previously locked by the Transaction
              Mode state.
            </p>
          </div>

          {/* CANNOT ADJUST SECTION */}
          <div id={Data.links[6][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[6][1]} />
            <p className='text-left mx-5'>
              You will run into this error message pretty frequently, but
              luckily there is a quick fix for this. Before we get to the
              resolution for this though, I believe that it is important to
              understand the two settings we will be looking at that will cause
              this error.
              <br />
              <br />
              Both settings will be located in the 'Payment Gateway Setup' under
              Stations in the partner portal. You can access this section by
              clicking on the lock icon next to each station on an account:
              {/*}
              <img
                className='bg-slate-300 w-5/6 p-1 rounded m-1'
                src={stations}
                alt='stations'
              />
  */}
              Clicking this icon will open a form used to link a payment gateway
              to the POS station. The two settings that we will be focusing on
              will be on the bottom of this form:
              {/*}
              <img
                className='bg-slate-300 w-5/6 p-1 rounded m-1'
                src={tip_settings}
                alt='tip settings'
              />
  */}
              <br />
              <br />
              Tip Prompt and Enable Tip Adjustment are the two settings to blame
              for this error. Both will set the way the station acts towards
              applying tips. To understand the difference between the two, see
              the descriptions below:
              <br />
              <br />
              <ol className='list-disc ml-4 text-sm'>
                <li>
                  Tip Prompt: Enabling this one will cause the station to prompt
                  the customer to declare their tip amount while closing out the
                  check.
                </li>
                <li>
                  Enable Tip Adjustment: Enabling this will not prompt the
                  customer to apply their own tips on the POS. Rather, this will
                  add a tip line to the receipts, and the servers will declare
                  their tips after the check is closed.
                </li>
              </ol>
              <br />
              <br />
              At this point you may be able to guess what the issue is here. If
              not, I will explain. If tip prompt is enabled, employees will not
              be allowed to adjust tips on closed checks in the tips section.
              Simply disable the Tip Prompt setting and make sure that Tip
              Adjust is enabled to get around the error. Keep in mind, Tip
              Prompt will supersede Tip adjust so even if both are enabled at
              the same time, you will still see this error when adjusting tips.
            </p>
          </div>

          {/* FORMAT ERROR SECTION */}
          <div id={Data.links[7][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[7][1]} />
            <p className='text-left mx-5'>
              Sometimes you will face an error that says 'Format Error' which is
              a pretty general error on pax devices. If this device was working
              fine and all of a sudden is faced with this error, there is one
              sure fire way of getting rid of the error.
              <br />
              <br />
              We can resolve this error by force closing both the pos app and the 
              payment processing app at the same time and then restarting them.
              <br />
              <br />
              If this does not fix it try to restart the device and then proceed to 
              close the batch if the restart fails.
              <br />
              <br />
            </p>
          </div>

          {/* COULD NOT CONNECT TO SERVER ERROR */}
          <div id={Data.links[8][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[8][1]} />
            <p className='text-left mx-5'>
              This error is pretty common, especially with new merchants not
              used to the system. Luckily there is a super simple solution the
              the problem.
              <br />
              <br />
              All thats needed is to reopen the BroadPOS app so that it is
              active on the screen. It shouldn't be running as a background
              process on the device.
              <br />
              <br />
              To see a view of the apps that are running in the background, you
              can tap the square icon in the bottom right of the screen. This
              will pull up the list of running apps, and from here you can
              choose to close out a process completely by either swiping it up,
              or maybe there is an X that populates.
              <br />
              <br />
              I am not super familiar with Android Devices.
              <br />
              <br />
            </p>
          </div>

          {/* INCREMENTAL AUTH SECTION */}
          <div id={Data.links[9][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[9][1]} />
            <p className='text-left mx-5'>
              This error is pretty uncommon in my experience here, but this
              error indicates that adjusting the auth is not allowed. Usually
              trying a different card to test if the error is recurring is all
              you can do in this situation. You could always try paying out on a
              new order, but I have had little success with this.
              <br />
              <br />
              If I were to guess, this probably has something to do with the
              card holder's bank, as it usually doesn't affect all cards in most
              cases.
              <br />
              <br />
              If however, it does affect multiple cards, you will want to
              request a new var sheet from their processor to push to tsys.
              Something is wrong with their Tokenization at that point.
            </p>
          </div>

          {/* CARD NUMBER BLANK SECTION */}
          <div id={Data.links[10][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[10][1]} />
            <p className='text-left mx-5'>
              This error will populate if a card is swiped incorrectly. Have
              them try swiping again, correctly this time, and if it still shows
              after swiping, try power cycling the reader.
              <br />
              <br />
              If after restarting the device, its still showing this error, try
              a different card. If this is affecting all cards, request a new
              build from the processor or look into potential mechanical
              failures in the device.
            </p>
          </div>
          <div id={Data.links[11][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[11][1]} />
            <div className='flex justify-around'>
              <p className='text-left mx-5 my-auto'>
                You may notice this error after setting up a Pax E700/800
                terminal for the first time for a merchant. This will populate
                if they don't have the CDS module added to their account.
                <br />
                <br />
                To add this module, you will need to access their portal and
                navigating to the app store section. From here you need to find
                the app labeled 'CDS' and select install. Once this is added,
                have the merchant refresh the terminal and the error should go
                away.
              </p>
              {/*}
              <img
                className='bg-slate-300 w-1/6 hover:w-2/6 p-1 rounded m-5'
                src={ip_error}
                alt='ip_error'
              />
  */}
            </div>
          </div>
          <div id={Data.links[12][0]} className='pb-5'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionHeader title={Data.links[12][1]} />
            <div className='mx-5'>
              <p className='text-left'></p>
            </div>
          </div>
          <UnsupportedTransaction />
        </div>
      </div>
    </div>
  );
};

const UnsupportedTransaction = () => {
  return (
    <div id={Data.links[13][0]} className='pb-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionHeader title={Data.links[13][1]} />
      <div>
        <p>
          This error indicates that the VAR is not set up correctly for the type
          or business they are running. Typically you will see this populate
          when trying to adjust tips for a restaurant that is set to retail
          based on their VAR sheet.
        </p>
      </div>
    </div>
  );
};

export default ErrorGuide;
