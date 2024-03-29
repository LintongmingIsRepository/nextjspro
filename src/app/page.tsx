
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello word</div>
      <Link href="/name">预测</Link>
    </main>
  );
}
