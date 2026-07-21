import Link from "next/link";
import { topics } from "./checklist/content";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full md:w-3/5 mx-auto px-4 md:px-0 py-8">
      <h1 className="text-2xl font-bold mb-2">UIの学習メモ</h1>
      <p className="text-sm text-muted-foreground mb-8">
        気になるUIのテーマを選ぶと、概要・実例・チェックリストが見られます。
      </p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              href={`/checklist/${topic.id}`}
              className="block rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <h2 className="font-semibold">{topic.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {topic.overview[0]}
              </p>
              <span className="mt-3 inline-block text-xs text-muted-foreground">
                {topic.checklist?.length
                  ? `チェック項目 ${topic.checklist.length} 件`
                  : "読み物"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
