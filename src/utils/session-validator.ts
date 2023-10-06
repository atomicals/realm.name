import { Cookies } from 'react-cookie';

export function updateSessionCookie(session: any) {
  const cookies = new Cookies();
  cookies.set('bpKey', JSON.stringify(session), {
    path: '/',
    sameSite: 'none',
    secure: true,
    httpOnly: false,
    maxAge: 3600 * 24 * 365,
  });
}

export function getSessionFromCookie(): any {
  const cookies = new Cookies();
  return validateSession(cookies.get('bpKey'));
}

export function deleteSessionFromCookie(): any {
  const cookies = new Cookies();
  cookies.remove('bpKey', { path: '/', domain: 'localhost:3001' });
  cookies.remove('bpKey', { path: '/', domain: 'localhost:3000' });
  cookies.remove('bpKey', { path: '/', domain: 'localhost' });
  cookies.remove('bpKey', { path: '/', domain: '.localhost' });
  cookies.remove('bpKey', { path: '/', domain: '.localhost:3001' });
  cookies.remove('bpKey', { path: '/', domain: 'realm.name' });
  cookies.remove('bpKey', { path: '/', domain: '.realm.name' });

  document.cookie.split(';').forEach(c => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');

    console.log('Cookie deleted');
  });
  return;
}

function validateSession(session): any | null {
  if (!session) {
    return null;
  }
  const validateCookie = (
    cookie
  ): {
    sha256d: string;
    encryptedPhrase: string;
    encryptedPrimaryKey: string;
    encryptedFundingKey: string;
    primaryPublicKey: string;
    fundingPublicKey: string;
  } => {
    if (
      !cookie.encryptedPhrase ||
      !cookie.encryptedPrimaryKey ||
      !cookie.encryptedFundingKey ||
      !cookie.primaryPublicKey ||
      !cookie.fundingPublicKey ||
      !cookie.sha256d
    ) {
      throw new Error('Invalid cookie format: ' + cookie);
    }

    return cookie;
  };
  try {
    const validated = validateCookie(session);
    return validated;
  } catch (ex) {
    console.log('Cookie Error: ', ex);
    return undefined;
  }
}
