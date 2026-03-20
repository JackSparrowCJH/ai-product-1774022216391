```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "功德木鱼",
  description: "敲木鱼积功德，上班摸鱼解压神器",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
```
