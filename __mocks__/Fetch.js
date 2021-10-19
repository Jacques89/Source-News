export function setupFetchStub(news) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            news,
          }),
      })
    })
  }
}