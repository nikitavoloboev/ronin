import { add, alter, create, drop, get, set } from 'ronin';
export default () => [
  create.model({
    slug: 'user',
    fields: [
      { slug: 'name', unique: false, required: false, type: 'string' },
      { slug: 'email', unique: true, required: false, type: 'string' },
    ],
  }),
  create.model({
    slug: 'post',
    fields: [
      { slug: 'title', unique: false, required: false, type: 'string' },
      { slug: 'content', unique: false, required: false, type: 'string' },
      {
        slug: 'createdBy',
        unique: false,
        required: false,
        type: 'link',
        target: 'user',
      },
    ],
  }),
];
