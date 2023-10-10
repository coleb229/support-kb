export const mealSteps = [
  'Enable the setting "Enable Meal Period Based Menu" in the portal or POS settings',
  'Add a meal period profile in the portal under Settings --- Setup --- Meal Period --- Edit ---> + Add Meal Period',
  'Set the name, days, and start/end times for the meal period and hit Save',
  'Navigate to the catalog and locate the item/category that needs the meal period applied',
  'Click on the item/category and it will open the item/category details page',
  'Click on the "Meal Period" entry and select the meal period profile that was created',
  'Click Save, then refresh the POS to see the changes reflected',
]

export const tieredLoyaltySteps = [
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
]

export const printerSettingsSteps = [
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
]

export const ecommerceSettingsSteps = ['']

export const inventorySetupSteps = ['']

export const bugReplicationSteps = ['']
