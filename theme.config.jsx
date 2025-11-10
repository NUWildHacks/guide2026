import { useRouter } from 'next/router';
import 'katex/dist/katex.min.css'

const title = 'WildHacks Guide';
const titleTemplate = '%s – WildHacks Guide';
const description = 'WildHacks Hackathon Guide';

export default {
  logo: (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '500',
      }}
    >
      <img src="/wildhacks2025.svg" style={{ height: '32px' }} />
      <span>WildHacks 2025 Guide</span>
    </div>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: undefined,
  },
  primaryHue: 264,
  primarySaturation: 36,
  search: {
    placeholder: 'Search guide...',
  },
  sidebar: {
    toggleButton: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span style={{ width: '100%', textAlign: 'center' }}>
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://www.wildhacks.net" target="_blank">
          WildHacks
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return { title, description };
    }

    return { titleTemplate, description };
  },
};
