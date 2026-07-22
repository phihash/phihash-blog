import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  topics,
  type Example,
  type ChecklistItem,
  type OverviewBlock,
} from "../content";

export function generateStaticParams() {
  return topics.map((t) => ({ id: t.id }));
}

function Overview({ blocks }: { blocks: OverviewBlock[] }) {
  return (
    <div className="max-w-prose">
      {blocks.map((block, i) => {
        if (typeof block === "string") {
          return (
            <p
              key={i}
              className="text-[15px] leading-[1.9] tracking-[0.01em] text-foreground/80 [&:not(:first-child)]:mt-5 [text-wrap:pretty]"
            >
              {block}
            </p>
          );
        }
        if ("heading" in block) {
          return (
            <h2
              key={i}
              className="mt-9 mb-4 border-b pb-2 text-lg font-bold tracking-tight first:mt-0"
            >
              {block.heading}
            </h2>
          );
        }
        // term / text（対比・定義）
        return (
          <div
            key={i}
            className="mt-5 rounded-lg border-l-2 border-foreground/15 pl-4"
          >
            <p className="text-sm font-semibold tracking-tight">{block.term}</p>
            <p className="mt-1.5 text-[15px] leading-[1.9] tracking-[0.01em] text-foreground/80 [text-wrap:pretty]">
              {block.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function Examples({ examples }: { examples: Example[] }) {
  return (
    <div className="flex flex-col gap-8">
      {examples.map((ex, i) => (
        <figure key={i}>
          {ex.image ? (
            <Image
              src={ex.image}
              alt={ex.caption}
              width={800}
              height={480}
              className="rounded-lg border w-full h-auto"
            />
          ) : (
            <div className="flex h-44 items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground">
              スクショ未登録
            </div>
          )}
          <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            {ex.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li
          key={item.id}
          className={`flex gap-3 py-4 ${i > 0 ? "border-t" : ""}`}
        >
          <Checkbox id={item.id} className="mt-0.5" />
          <div className="flex flex-col gap-1">
            <label
              htmlFor={item.id}
              className="text-[15px] font-medium leading-snug"
            >
              {item.label}
            </label>
            {item.hint && (
              <span className="text-[13px] leading-relaxed text-muted-foreground">
                {item.hint}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

type Tab = { value: string; label: string; node: ReactNode };

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = topics.find((t) => t.id === id);
  if (!topic) notFound();

  // 中身のあるタブだけ組み立てる（概要だけの読み物トピックにも対応）
  const tabs: Tab[] = [];
  if (topic.overview.length)
    tabs.push({
      value: "overview",
      label: "概要",
      node: <Overview paragraphs={topic.overview} />,
    });
  if (topic.examples?.length)
    tabs.push({
      value: "examples",
      label: "実例",
      node: <Examples examples={topic.examples} />,
    });
  if (topic.checklist?.length)
    tabs.push({
      value: "checklist",
      label: "チェックリスト",
      node: <Checklist items={topic.checklist} />,
    });

  return (
    <main className="flex flex-col flex-1 w-full max-w-2xl mx-auto px-5 md:px-0 py-10">
      <Link
        href="/"
        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        ← 一覧へ
      </Link>
      <h1 className="text-[28px] font-bold tracking-tight leading-tight mb-1">
        {topic.title}
      </h1>

      {tabs.length <= 1 ? (
        // タブが1つ（＝読み物）ならタブUIを出さず本文だけ
        <div className="mt-6">{tabs[0]?.node}</div>
      ) : (
        <Tabs defaultValue={tabs[0].value} className="mt-6 w-full">
          <TabsList
            variant="line"
            className="w-full justify-start gap-6 p-0"
          >
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="flex-none rounded-none border-0 px-0 pb-2.5 text-[13px] text-foreground/50 data-active:text-foreground"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="pt-6">
              {t.node}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </main>
  );
}
