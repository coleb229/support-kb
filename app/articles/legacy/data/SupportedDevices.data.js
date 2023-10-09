import step1 from '../assets/step1.JPG';
import step2 from '../assets/step2.JPG';
import step3 from '../assets/step3.JPG';
import step4 from '../assets/step4.JPG';
import step5 from '../assets/step5.JPG';
import step6 from '../assets/step6.JPG';
import step7 from '../assets/step7.JPG';
import step8 from '../assets/step8.JPG';
import step9 from '../assets/step9.JPG';

const Data = {
  references: [
    [
      'https://docs.google.com/document/d/1_4hQObcM3wgi1E4pTKIizsTnlGc0t2w0K5zExiWdqRk/edit',
      'V',
      'Printer Troubleshooting Guide',
    ],
    [
      'https://docs.google.com/spreadsheets/d/1Wxxk0VEyRX78aKmkZFILC1sc6WUWZRLQcWaVuQSdQDk/edit?usp:sharing',
      'METISPRO Corp',
      'Printer Compatibility Sheet',
    ],
    [
      'https://docs.google.com/document/d/1dXLRKUixB0gmYJAV2N0FNdrGp7r8XzCcRYcVpAoGBS0/edit',
      'Dmitry',
      'AMP8200',
    ],
    [
      'https://docs.google.com/document/d/18CV2UtGqy2XH_limaqn-aYCOq8s6CZZTpmbucxLBWFQ/edit',
      'METISPRO Corp',
      'Manual Credit Card Setup for Elavon',
    ],
    [
      'https://docs.google.com/document/d/1YO1NPUYZGGyTt929miZrprAAD8hDDXBlP2851BGubCk/edit#heading=h.14tclp51d7y6',
      'METISPRO Corp',
      'Instructions for Date and time change',
    ],
    [
      'https://docs.google.com/document/d/163tl10LGdgthz53LqpjJIso-tUq7DEcYd71PsM5MXLw/edit',
      'METISPRO Corp',
      'How to Remove Manual Entry',
    ],
    [
      'https://docs.google.com/document/d/1rUB6uXGPm7Hj5-AZd_7ctHNGCo-hp2ywXq0L4dPH4oQ/edit',
      'METISPRO Corp',
      'Dejavoo Reader Setup - Payroc',
    ],
    [
      'https://docs.google.com/document/d/1QB_iovt3JJTK9Y4YSJ2uCfCRH1kOXPRpp_-KQtrMZwI/edit',
      'METISPRO Corp',
      'Dejavoo Batch Out from CC Terminal',
    ],
    [
      'https://docs.google.com/document/d/13I0b9io_xZMZioZgQxg643oJjlUWPzpAM5G9e9Vqx5A/edit',
      'Dmitry',
      'E700/Q20L PAX SET UP',
    ],
    [
      'https://docs.google.com/document/d/1QJ1jkMGZZdJqobLcZTFgMYC_JSet7QSxp8ICAamoDPw/edit',
      'METISPRO Corp',
      'Setup Elavon Readers',
    ],
  ],

  zebra_scanners: [],

  epson_printers: [
    [
      'TM-M30',
      'https://support.hp.com/us-en/product/epson-tm-m30-printer/18809650/troubleshooting',
    ],
    [
      'U220',
      'https://files.support.epson.com/pdf/pos/bulk/tm-u220_trg_en_std_reve.pdf',
    ],
    [
      'U220i',
      'https://files.support.epson.com/pdf/pos/bulk/tm-u220_trg_en_std_reve.pdf',
    ],
    [
      'T88Vi',
      'https://files.support.epson.com/pdf/pos/bulk/tm-t88v_hwum_en_02.pdf',
    ],
    [
      'T88V',
      'https://files.support.epson.com/pdf/pos/bulk/tm-t88v_hwum_en_02.pdf',
    ],
    ['L90', ''],
  ],

  star_printers: [
    [
      'MCP3',
      'https://www.star-m.jp/products/s_print/mcprint3/manual/en/index.htm',
    ],
    [
      'SP742',
      'https://help.talech.com/s/article/Star-Micronics-Troubleshooting',
    ],
    [
      'SP700',
      'https://help.talech.com/s/article/Star-Micronics-Troubleshooting',
    ],
    [
      'TSP100',
      'https://support.revelsystems.com/s/article/Star-TSP-650-Troubleshooting-1582902926882',
    ],
  ],

  snbc_printers: [
    [
      'M300',
      'https://www.teamsable.com/wp-content/uploads/2022/02/BTP-M300-Users-Manual-V1.0.pdf',
    ],
    [
      'BTP180',
      'https://www.teamsable.com/wp-content/uploads/2022/02/BTP-R180II-Users-ManualV1.0.pdf',
    ],
  ],

  zebra_printers: [['ZD410', '']],

  magtek_readers: [['iDyanamo 6', '']],

  ingenico_readers: [['iPP320', '']],

  pax_readers: [
    ['A80', ''],
    ['A920', ''],
    ['A920 Pro', ''],
    ['E600', ''],
    ['E700', ''],
    ['E800', ''],
  ],

  links: [
    ['printers', 'Printers Section'],
    ['readers', 'Card Readers Section'],
  ],

  sublinks: [['printers', 'Printers Section']],

  printers_links: [
    ['m30', 'TM-m30'],
    ['mcprint', 'mcPrint3'],
    ['u220', 'U220'],
    ['all', 'All Printers'],
  ],

  amp_readers: [['8200', 'AMP 8200']],

  reader_links: [
    ['8200', 'AMP 8200'],
    ['elavon', 'Elavon'],
    ['dejavoo', 'Dejavoo'],
    ['pax', 'PAX'],
  ],

  steps_list: [
    [
      'Press “O”(HomeButton) to go to the Home Screen of the terminal. Open “TSYS Sierra”',
      step1,
    ],
    [
      'Select “Func” Screen might vary depending on the processor and file setup. ',
      step2,
    ],
    ['Select Settings. Password: Current Date. Ex. 04202021', step3],
    ['Select “Transaction Settings”', step4],
    ['Select “Credit”', step5],
    ['Scroll to the bottom of the page and select “Manual Entry”', step6],
    ['Select “ALL” and Disable.', step7],
    [
      'Keep pressing the Back button “<” until you get to the “Func” screen. ',
      step8,
    ],
    [
      'Press “O”(HomeButton) to go to the Home Screen of the terminal. Open Quantic Link app and run another transaction.',
      step9,
    ],
  ],
};

export default Data;
