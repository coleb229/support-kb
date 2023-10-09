const Data = {
  links: [
    ['entry', 'Support Entry Points'],
    ['calls', 'Call Guide'],
    ['tickets', 'Tickets'],
    ['handoff', 'Shift Handoff'],
    ['software', 'Software Basics'],
    ['hardware', 'Hardware Basics'],
    ['partners', 'Our Partners'],
    ['terminology', 'Terminology'],
    ['technical', 'Technical Support Processes'],
  ],

  references: [
    [
      'https://docs.google.com/document/d/1t2GZd2RLW_Je1uPHZuL7mK-BQUXnSHVoOM5G1SDSOVQ/edit?usp:sharing',
      'Dmitry',
      'New Hire Guide document',
    ],
  ],

  urgency_labels: ['Priority', 'Use Case'],
  urgency_list: [
    [
      'Urgent',
      'Card readers/Printers/POS down/IP range and Wifi problems.  This should almost never be used.',
    ],
    [
      'Highest',
      'Use this if this needs to be fixed ASAP, as it is affecting operations.  Rarely used.',
    ],
    ['High', 'Reporting/Menu/Batch'],
    ['Medium', "Menu issues that don't need to be resolved immediately."],
    [
      'Low',
      'Issues that hold little to no weight on operations. Requests/Menu adjustments',
    ],
  ],

  assignment_labels: ['Team', 'Use Case'],
  assignment_list: [
    ['Support', "That's us"],
    ['Boarding', 'Menu Issues/Account setup'],
    ['Accounting/Billing', 'Subscription expire/Billing'],
    ['Sales', 'Sales/Pricing'],
    ['Development', 'iOS/Android/Backend software issues'],
  ],

  gateway_list: [
    [
      'Pax Direct',
      'This should only have Tsys/BroadPOS running in the payment terminal.',
    ],
    [
      'Pax(QST/LITE/APIO)',
      'This can be used when multiple apps are running on the payment terminal.  Tsys/BroadPOS + One of three apps listed in label.',
    ],
    [
      'Payroc',
      'This gateway utilizes Apio to communicate transaction info to Payroc directly.  You will need Apio + Tsys/BroadPOS running for this setup.',
    ],
    ['Magensa', 'This is for iPads using magtek readers.'],
  ],

  gateway_labels: ['Gateway', 'Use Case'],
  software_list: [
    [
      'QST',
      '(Quantic Smart Terminal) This software is used mainly for simple quick-pay transactions.  This is a very reduced solution to POS that makes payments quick and simple.',
    ],
    [
      'Qlite',
      '(Quantic Lite) This software is very similar to our main POS software, but is mainly used on handheld devices, rather than stationary terminals.',
    ],
    [
      'POS',
      'This is our fully loaded POS app, with all the bells and whistles.',
    ],
    [
      'POS/Qlite',
      'This is just a combo that a lot of merchants use when they have handheld terminals and standing terminals.',
    ],
  ],

  software_label: ['App', 'Use Case'],
  additional_list: [
    [
      'KDS',
      '(Kitchen Display System) Some merchants will use this to send tickets to a screen instead of/along with sending them to a ticket printer.',
    ],
    [
      'eCommerce',
      'This software is used by merchants to sell their products online.  We supplie this in the form of an API that they can attach to their website.',
    ],
    [
      'CDS',
      '(Customer Display Screen) This software is utilized by the customer facing screens on applicable hardware.',
    ],
    [
      'Analytics',
      'This is a mobile app used to track business trends for a location.',
    ],
    ['Kiosk', 'This software is used for self ordering stations.'],
    [
      'Digital Signage',
      'This software is used to create visual media for a large display.',
    ],
  ],

  additional_labels: ['Software', 'Use Case'],
  term_list: [
    [
      'VAR',
      '(Value Added Reseller) Usually see this as VAR Sheet, which is something we use to build new payment terminals',
    ],
    ['MID', '(Merchant ID) Used to identify a merchant'],
    [
      'White Label',
      'This is a reseller that has reskinned our software to sell as their own',
    ],
    ['FSR', 'Full Service Restaurant'],
    ['QSR', 'Quick Service Restaurant'],
    [
      'Batch',
      'The batch is a consolidated list of transaction info that gets sent to the processor when the merchant closes it.  This is how they fund the transactions.',
    ],
  ],

  term_labels: ['Term', 'Meaning'],
  rekey_list: [
    ['Payroc', 'rekeys@payroc.com'],
    ['Maverick', 'terminals@maverickhq.com'],
    ['Paybright', 'support@gopaybright.com'],
    ['UCG Processing', 'gary@ucgprocessing.com'],
    ['Hawthorne', 'support@hawthornepay.com'],
  ],

  status_labels: ['Status', 'Use Case'],
  status_list: [
    ['Resolved', 'Use this when you resolved an interaction'],
    [
      'Needs Attention',
      `Use this when an interaction doesn't require a follow up, but does require attention`,
    ],
    [
      'In Progress',
      'Use this when a team is working on an issue currently and we are waiting to hear back',
    ],
    ['Follow Up', 'Use this when an issue requires the next team to follow up'],
  ],

  relevent_labels: ['Link Type', 'Use Case'],
  relevent_list: [
    ['Ticket', 'Use this if a ticket is made for the issue'],
    [
      'Collab',
      'Use this if a collab ticket is being investigated for the issue',
    ],
    ['Mail', 'Use this if there is an email thread for the issue'],
    ['Text', 'Use this if there is a text thread for the issue'],
  ],

  rekey_labels: ['Processor', 'Email'],
};

export default Data;
