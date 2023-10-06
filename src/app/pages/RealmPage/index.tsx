import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Profile } from './Profile';
import { NavBarNew } from 'app/components/NavBarNew';

export function RealmPage() {
  return (
    <>
      <Helmet>
        <title>+Realm Names</title>
        <meta name="description" content="Realm name system powered by Bitcoin Atomicals" />
      </Helmet>
      <NavBarNew />
      <Profile />
    </>
  );
}
