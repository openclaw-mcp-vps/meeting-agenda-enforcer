import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meeting Agenda Enforcer — Keep Meetings On Track',
  description: 'Integrates with Zoom/Teams to track agenda progress and send gentle nudges when meetings go off-topic.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b948cdb0-1b13-4e09-8cd0-52eec8c587ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
