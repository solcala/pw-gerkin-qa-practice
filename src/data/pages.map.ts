export const PAGES = {
  home: '/index.html',
  login: '/auth_ecommerce.html',
  register: '/register.html',
  recoverPassword: '/recover-password.html',
  checkboxes: '/checkboxes.html',
  radioButtons: '/radiobuttons.html',
  staticTable: '/web-table.html',
  dynamicTable: '/dynamic-table.html',
  dropdowns: '/dropdowns.html',
  ecommerce: '/auth_ecommerce.html',
} as const;

export const CREDENTIALS = {
  email: process.env.ECOMMERCE_EMAIL ?? 'admin@admin.com',
  password: process.env.ECOMMERCE_PASSWORD ?? 'admin123',
} as const;
