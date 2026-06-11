const DEFAULT_BASE_URL = 'https://qa-practice.razvanvancea.ro';

export const environments = {
  baseURL: process.env.BASE_URL ?? DEFAULT_BASE_URL,
  isCI: Boolean(process.env.CI),
  workers: process.env.CI ? 1 : undefined,
  retries: process.env.CI ? 2 : 0,
} as const;
