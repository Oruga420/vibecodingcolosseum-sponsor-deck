import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vibe Coding Colosseum | Sponsor Deck',
  description: 'Sponsor deck for QuickDrops and live crowd-voted builds',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
