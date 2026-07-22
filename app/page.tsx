import Link from "next/link";
import { topics } from "./checklist/content";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-2xl mx-auto px-5 md:px-0 py-10">
      <h1 className="text-[28px] font-bold tracking-tight leading-tight mb-1">
        UIの学習メモ
      </h1>
      <p className="text-[13px] text-muted-foreground mb-8">
        気になるテーマを選ぶと、概要・実例・チェックリストが見られます。
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {topics.map((topic) => {
          // 概要の最初の段落（文字列ブロック）をカードの説明に使う
          const lead = topic.overview.find((b) => typeof b === "string");
          return (
          <li key={topic.id}>
            <Link
              href={`/checklist/${topic.id}`}
              className="group flex h-full flex-col rounded-xl border p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-semibold tracking-tight">{topic.title}</h2>
                <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">
                  {topic.checklist?.length
                    ? `チェック ${topic.checklist.length}`
                    : "読み物"}
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                {lead}
              </p>
            </Link>
          </li>
          );
        })}
      </ul>
    </main>
  );
}
