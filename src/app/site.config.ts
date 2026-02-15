export const SITE_CONFIG = {
  github: {
    username: 'developman2013',
    profileUrl: 'https://github.com/developman2013',
    summaryThemes: {
      light: 'default',
      dark: 'nord_dark'
    }
  }
} as const;

export function buildGithubSummaryUrl(theme: 'light' | 'dark'): string {
  const { username, summaryThemes } = SITE_CONFIG.github;
  const cardTheme = theme === 'dark' ? summaryThemes.dark : summaryThemes.light;
  return `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=${cardTheme}`;
}
