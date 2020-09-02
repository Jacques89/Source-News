export default {
  get: jest.fn(() => Promise.resolve({
    data: [
      {
        id: 1,
        title: 'World-News',
      },
      {
        id: 2,
        title: 'Sports-News'
      }
    ]
  }))
}