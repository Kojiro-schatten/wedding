import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import { ColorSchemeScript, MantineProvider, rem } from '@mantine/core';

export const metadata: Metadata = {
  title: "結婚式のご案内",
  description: "",
};

const ShipporiMincho = Shippori_Mincho({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{ margin: 0 }} className={ShipporiMincho.className}>
        <MantineProvider
          theme={{
            fontSizes: {
              xs: rem(10),
              sm: rem(12),
              md: rem(14),
              lg: rem(16),
              xl: rem(20),
            },
            lineHeights: {
              xs: '1.4',
              sm: '1.45',
              md: '1.55',
              lg: '1.6',
              xl: '1.65',
            },
            fontFamily: '__Shippori_Mincho_1e61fa, __Shippori_Mincho_Fallback_1e61fa, Monaco, Courier, monospace',
            fontFamilyMonospace: '__Shippori_Mincho_1e61fa, __Shippori_Mincho_Fallback_1e61fa, Monaco, Courier, monospace',
            headings: {
              // properties for all headings
              fontWeight: '400',

              // properties for individual headings, all of them are optional
              sizes: {
                h1: {
                  fontSize: rem(36),
                  lineHeight: '1.4',
                },
                h2: { fontSize: rem(30), lineHeight: '1.5' },
                h3: { fontSize: rem(28), lineHeight: '1.5'},
                h4: { fontSize: rem(26), lineHeight: '1.5'},
                h6: { fontWeight: '900' },
              },
            },
            colors: {
              'red': ['#F72869', '#EF3269', '#ED4401', '#EC4401', '#EB4401', '#EA4401', '#EA4401', '#EA4401', '#EA4401', '#EA4401'],
              'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
