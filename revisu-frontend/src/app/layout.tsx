import "../styles/globals.css";

export const metadata = {
    title: 'revisu - review your notes',
    description: 'Preserve ideias, sharpe your notes with revisu',
}

export default function RootLayout({children,}: Readonly <{ children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
