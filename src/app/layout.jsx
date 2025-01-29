import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script 
          type="module" 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script 
          noModule 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 