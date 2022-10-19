import { list } from '@keystone-6/core';
import { text, timestamp, integer, relationship } from '@keystone-6/core/fields';

export default list({
  fields: {
    product: relationship({ ref: 'Product', many: true, ui: { hideCreate: true }}),
    sum: integer({ validation: { isRequired: true }}),
    quantity: integer({ validation: { isRequired: true } }),
    createdAt: timestamp({ validation: { isRequired: true }}),
  },
});