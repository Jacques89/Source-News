export default global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    news: [
      {
        category: 'World', 
        content: 'Squirrel becomes President',
        img: 'some Image URL',
        title: 'Squirrel has now become President of the World'
      },
      {
        category: 'Sports',
        content: 'Messi wins World Cup with Argentina',
        img: 'some url image',
        title: 'Messi finally wins a World Cup'
      }
    ]
  })
}))