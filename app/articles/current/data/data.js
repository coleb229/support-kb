export const data = {
  mealPeriod: {
    steps: [
      'Enable the setting "Enable Meal Period Based Menu" in the portal or POS settings',
      'Add a meal period profile in the portal under Settings --- Setup --- Meal Period --- Edit ---> + Add Meal Period',
      'Set the name, days, and start/end times for the meal period and hit Save',
      'Navigate to the catalog and locate the item/category that needs the meal period applied',
      'Click on the item/category and it will open the item/category details page',
      'Click on the "Meal Period" entry and select the meal period profile that was created',
      'Click Save, then refresh the POS to see the changes reflected',
    ],
    useCases: [
      'This is used to set up different menus for different times of the day. (i.e. Breakfast, Lunch, Dinner)',
    ],
  },
  tieredLoyalty: {
    steps: [
      'Subscribe to the "Loyalty" module on the account from the portal under App Store ---> Loyalty',
      'Open the loyalty module settings to set the initial loyalty settings',
      'Set the name of the Reward Program',
      'Set the rate at which points are redeemable for. (i.e. Conversion Rate)',
      'Set the amount of points earned per dollar spent. (i.e. Accrual Rate)',
      'Set the amount of points required before a reward can be redeemed. (i.e. Accrual Target)',
      'Set the rate at which the points will expire. (i.e. Expire After)',
      'Set the maximum number of points each customer can earn. (i.e. Max Limit)',
      'Choose whether or not to allow for signup bonus points, and then set the bonus amount if true',
      'Hit save and refresh the pos to see the changes reflected',
    ],
    useCases: [
      'This is used to set up a loyalty program for customers to earn points for purchases',
    ],
  },
  printerSettings: {
    steps: [
      'Brand: Select the brand of printer that is being used',
      'Model: Select the model of printer that is being used',
      'IP Address: Enter the IP address of the printer (Either self-test from the printer or scan from the POS)',
      'Has Cash Drawer: Select whether or not the printer has a cash drawer attached',
      'Drawer Name: Enter the name of the cash drawer',
      'Enable Drawer: This will turn the drawer features on or off',
      'Has Second Cash Drawer: Select whether or not the printer has a second cash drawer attached',
      'Receipt Printing: Select whether or not the printer will print receipts from this station',
      'Re-route Printer: Select whether the tickets should be re-routed to another printer, in the scenerio that this printer is queue jammed',
      'Online Order Printing: This should be enabled if they are on direct url online order printing, and they want online orders to print from this profile',
      'Enable Buzzer: This will turn on the buzzer when orders are sent to the printer',
      'Print Unassigned Items: This will print items that are not assigned to a printer',
      'Assign Terminal: selecting printer(s) in this section will cause this to only print tickets from assigned terminals',
      'Assign Service Area: selecting service area(s) in this section will cause this to only print tickets from assigned service areas',
      'Show Item Price: Enable this to display item prices on the printed tickets',
      'Label Printing: Enable this to print labels from this printer',
    ],
    useCases: [
      'This is used to set up printers for printing tickets and labels',
    ],
  },
  ecommerceSettings: {
    steps: [
      'Requires Card Not Present Setup - They will need to have auth.net setup in the partner portal under Settings -> Card Not Present Setup',
      'Add the module for ecommerce in the portal under App Store',
      'Click on the gear wheel next to the ecommerce module to open the settings',
      'Set all of the entries, just to be sure that this will work',
      'Set the time schedule under the "Time Schedule" tab and click submit',
      'Optional: go back into the module settings and navigate to the "Generate Link" tab to copy a link to test out the new ecomm site url',
      'Enable the setting in the portal called "Enable Online Ordering"',
      'Navigate to Settings --- Setup ---> Service Areas to setup a new online ordering enabled service area',
      'Click edit and add a new service area as either "Delivery" or "Take Out" and remember to select "Enable Online" before hitting save',
      'If they need to also setup online order printing, follow this guide to do so: https://drive.google.com/drive/folders/1fIgkicbJ5lbi8M3CV-VFuOYNNux0LCLI',
      'Also make sure to navigate to the catalog section and also enable any items/categories that need to be enabled for online ordering',
    ],
    useCases: ['This is used to set up an online ordering website'],
  },
  inventorySetup: {
    steps: [
      'Add the inventory module in the portal under App Store',
      'Click on the gear wheel next to the inventory module to open the settings',
      'Make sure that the setting "Show Inventory in side menu" is enabled, to see this section in the POS',
    ],
    useCases: ['This is used to set up inventory tracking for items'],
  },
  bugReplication: {
    steps: [
      'Make sure that the POS is on the latest version',
      'Take note of if they are on Android or iOS, and additionally, depending on the issue, what kind of hardware they are using',
      'Take note of the exact steps that were taken to cause the issue',
      'Try the steps on your end and capture any referencial material you can for the investigation',
      'If unable to replicate, try to get a video of the issue occuring on their end',
    ],
    useCases: [
      'This is used to replicate bugs that are reported by customers',
      'It is important to get as much information as possible when replicating bugs, so that the dev team can work efficiently to resolve the issue.',
    ],
  },
  tsysQ20: {
    steps: [
      'Tap 4 corners --> Top left - Top Right - Bottom Left - Bottom Right',
      'password: MMDDYYYY (01/12/2023)',
      'Navigate to System Settings',
      'Navigate to the last page by hitting the arrow on the right of the screen',
      'Tap "App Management"',
      'Then tap on app update Terminal should reboot on Q20 from here and once you see PAX again its done.',
    ],
    useCases: [
      'This is used to update the Tsys file on the Q20 reader on Pax E700/800',
      'Also used to do more advanced troubleshooting on the Q20 reader',
    ],
  },
}
