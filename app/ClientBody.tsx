"use client";

type ClientBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function ClientBody({ children, className }: ClientBodyProps) {
  return (
    <body className={className} dir="rtl">
      {children}
    </body>
  );
}
