import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '20px 0' }}>404</h1>
      <p
        style={{
          fontSize: '1.5rem',
          marginBottom: '30px',
        }}
      >
        Page not found
      </p>
      <p
        style={{
          fontSize: '1.2rem',
          opacity: 0.8,
        }}
      >
        Redirecting to main page...
      </p>
    </div>
  );
}
