export default {
  type: 'object',
  name: 'postAuthor',
  title: 'Post author',
  fields: [
    {
      title: 'Person',
      name: 'person',
      type: 'reference',
      to: { type: 'person' }
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      roles: 'person.roles',
      image: 'person.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/'),
        media: data.image
      }
    }
  }
}
