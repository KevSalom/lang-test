import {unstable_setRequestLocale} from 'next-intl/server';


export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  unstable_setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}


const locales = ['en', 'es'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}