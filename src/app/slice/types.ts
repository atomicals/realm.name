 export interface AppGlobalState {
  encryptedPhrase?: string;
  encryptedPrimaryKey?: string;
  encryptedFundingKey?: string;
  primaryPublicKey?: string;
  primaryAddress?: string;
  fundingPublicKey?: string;
  fundingAddress?: string;
  sha256d?: string;
}
 
export enum LoadErrorType {
  RESPONSE_ERROR = 1,
  NOT_FOUND = 2,
}

export enum ErrorType {
  RESPONSE_ERROR = 1,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = AppGlobalState;
