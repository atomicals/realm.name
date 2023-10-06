import { ElectrumApiMock } from 'services/electrum-api-mock';

export const mockSearchRealmNameAndStatus = (notFound: boolean = false): any => {
  const setState = {
    result: {},
  };

  const client = new ElectrumApiMock();
  client.setGetStateCallback(() => {
    return setState;
  });

  if (!notFound) {
    client.setGetRealmInfoCallback(() => {
      return {
        result: {},
      };
    });
  } else {
    client.setGetRealmInfoCallback(() => {
      return {
        result: {},
      };
    });
  }
  return client;
};
