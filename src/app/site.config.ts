export const SITE_CONFIG = {
  github: {
    username: 'developman2013',
    profileUrl: 'https://github.com/developman2013',
    summaryThemes: {
      light: 'default',
      dark: 'dark'
    }
  },
  analytics: {
    provider: 'plausible',
    enabled: true,
    domain: 'pirahouski.com',
    scriptUrl: 'https://plausible.io/js/script.js'
  }
} as const;

export function buildGithubSummaryUrl(theme: 'light' | 'dark'): string {
  const { username, summaryThemes } = SITE_CONFIG.github;
  const cardTheme = theme === 'dark' ? summaryThemes.dark : summaryThemes.light;
  return `https://streak-stats.demolab.com?user=${username}&theme=${cardTheme}`;
}
