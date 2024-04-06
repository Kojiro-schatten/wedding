import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider, Title, rem } from '@mantine/core';

export const metadata: Metadata = {
  title: "2024/07/07 神前式",
  description: "",
};

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
      <body style={{ margin: 0 }}>
        <div style={{ margin: 'auto'}}>
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
              headings: {
                // properties for all headings
                fontWeight: '400',
                fontFamily: 'Roboto',

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
        </div>
      </body>
    </html>
  );
}
