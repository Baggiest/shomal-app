"use client";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" dir="rtl">
      {children}
    </body>
  );
}
