export function setupFetchStub(news: Object[]) {
  return function fetchStub(_url: RequestInfo) {
    return new Promise<any>((resolve) => {
      resolve({
        json: () =>
          Promise.resolve<any>({
            news
          })
      })
    })
  }
}
