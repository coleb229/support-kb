import ns1 from '../assets/ns1.JPG';
import ns2 from '../assets/ns2.JPG';
import ns3 from '../assets/ns3.JPG';
import ns4 from '../assets/ns4.JPG';
import ns5 from '../assets/ns5.JPG';
import ns6 from '../assets/ns6.JPG';
import ns7 from '../assets/ns7.JPG';
import ns8 from '../assets/ns8.JPG';
import ns9 from '../assets/ns9.JPG';
import ns10 from '../assets/ns10.JPG';
import ns11 from '../assets/ns11.JPG';
import cdi2 from '../assets/cdi2.JPG';
import cdi3 from '../assets/cdi3.JPG';
import cdi4 from '../assets/cdi4.JPG';
import cdi5 from '../assets/cdi5.JPG';

const Data = {
  links: [
    ['setup', 'Setting up Quantic Router'],
    ['cd', 'Setting up Cash Drawer'],
    ['cds_install', 'CDS Install'],
    ['cds_guide', 'CDS Guide'],
    ['kds_install', 'KDS Install'],
    ['kds_guide', 'KDS Guide'],
    ['stability', 'Stability Base Install'],
  ],

  references: [
    [
      'https://docs.google.com/document/d/1JWNJVLm_wayBR-OTb3RFISzwLExrxAKWMtp39N_Oszo/edit',
      'METISPRO Corp',
      'Quantic Router + Access Point/Cloud Key Install',
    ],
    [
      'https://docs.google.com/document/d/1yB6lQQr4NJmwZBBa_6BuHbWH4JFewqOogHYtWI5592U/edit',
      'METISPRO Corp',
      'HOW TO SETUP CASH DRAWER',
    ],
    [
      'https://docs.google.com/document/d/1T1lV23Q40xf4JQ_8ju--Bntbn4_DJOo3RIv3BU2U-3I/edit',
      'METISPRO Corp',
      'CDS Install',
    ],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],

  steps: [
    ['Plug in the power adapter to the power cable.', ns1],
    ['Plug in the power cable to the back of the router.', ns2],
    ['Plug in the power cable of the router to the power outlet', ns3],
    [
      'Connect the ISP ethernet cable to the Quantic router. A steady blue light indicates that the router is connected to the internet.',
      ns4,
    ],
    [
      'Connect a network switch to the router via Ethernet cable to allow for connection of other devices onto the network. Connect the network switch to power.',
      ns5,
    ],
    [
      'If not already, Connect the POE to the Cloud Key using the Unifi cable.',
      ns6,
    ],
    ['Connect the Black Cloud Key POE to Power.', ns7],
    ['Connect the Black Cloud Key to the Network using the LAN Port.', ns8],
    ['Connect the Power Supply to the Access Point POE.', ns9],
    ['Connect the POE to the network via Ethernet using the LAN port.', ns10],
    [
      'Connect the POE to the circular Access Point via Ethernet using the POE Port.',
      ns11,
    ],
  ],

  cd_steps: [
    [
      'Flip the Cash Drawer so that the bottom is facing up. This will reveal a serial port connection.',
      cdi2,
    ],
    [
      'Connect the Cash Drawer cable to the bottom of the Cash Drawer as shown',
      cdi3,
    ],
    [
      'Tighten the screws on the port so that it will stay connected to the Cash Drawer at all times.',
      cdi4,
    ],
    [
      'Connect the other end of the Cash Drawer cable to the “Grey” port on the receipt printer. This port will usually be outlined in a White Square or is labeled as a Cash Drawer Port. If required, you may need to remove some panels from the printer by pulling it off. Examples of where this port can be found are shown below:',
      cdi5,
    ],
  ],
};

export default Data;
