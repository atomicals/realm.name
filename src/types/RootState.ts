import { ConnectViewState } from 'app/components/ConnectView/slice/types';
import { ClaimViewState } from 'app/pages/ClaimPage/ClaimView/slice/types';
import { SearchRealmFormState } from 'app/components/SearchRealmForm/slice/types';
import { ProfileOverviewState } from 'app/pages/RealmPage/Profile/ProfileOverview/slice/types';
import { RealmsViewState } from 'app/pages/RealmsPage/RealmsView/slice/types';
import { AppGlobalState } from 'app/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { NftMinterState } from 'app/components/NftMinter/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
  theme?: ThemeState;
  searchRealmForm?: SearchRealmFormState;
  profileOverview?: ProfileOverviewState;
  connectViewState?: ConnectViewState;
  realmsViewState?: RealmsViewState;
  claimViewState?: ClaimViewState;
  nftMinterState?: NftMinterState;
  appGlobalState?: AppGlobalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
