import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { NavBarNew } from 'app/components/NavBarNew';
import { ClaimView } from './ClaimView';

export function ClaimPage() {
  return (
    <>
      <Helmet>
        <title>+Realm Names</title>
        <meta name="description" content="Realm name system powered by Bitcoin" />
      </Helmet>
      <NavBarNew />
      <ClaimView />
    </>
  );
}
