import { Repo } from 'types/Repo';

/* --- STATE --- */
export interface NftMinterState {
  name?: string;
  nftType: 'realm' | 'subrealm' | 'container' | 'normal';
  loading: boolean;
  error?: NftMinterErrorType | null
}

export const enum NftMinterErrorType {
  GENERAL_ERROR = 1,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = NftMinterState;
