import { list } from '@keystone-6/core';
import { text, password, select } from '@keystone-6/core/fields';

export default list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password({ validation: { isRequired: true } }),
  },
});