import { MdPerson } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },   {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        list: [
          { title: 'CEO/Owner', value: 'ceo' },
          { title: 'Developer', value: 'developer' },
          { title: 'MLS Agent', value: 'mls_agent' },
          { title: 'Real Estate Agent', value: 're_agent' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      roles: 'roles'
    }
  }
}