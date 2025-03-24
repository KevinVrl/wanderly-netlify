// app/layout.tsx
export const metadata = {
  title: "Wanderly",
  description: "Your AI-powered travel planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
