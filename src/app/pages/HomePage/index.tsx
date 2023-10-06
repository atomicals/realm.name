import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { HomeView } from './HomeView';
import { FooterBasic } from 'app/components/FooterBasic';
import { NavBarNew } from 'app/components/NavBarNew';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>+Realm Names</title>
        <meta name="description" content="Realm name system powered by" />
      </Helmet>
      <NavBarNew />
      <div>
        <HomeView />
        <FooterBasic />
      </div>
    </>
  );
}
