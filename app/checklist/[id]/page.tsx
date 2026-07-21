import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { topics } from "../content";

export function generateStaticParams() {
  return topics.map((t) => ({ id: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = topics.find((t) => t.id === id);
  if (!topic) notFound();

  // 中身のあるタブだけ出す（概要だけの読み物トピックにも対応）
  const tabs = [
    { value: "overview", label: "概要", show: topic.overview.length > 0 },
    { value: "examples", label: "実例", show: !!topic.examples?.length },
    { value: "checklist", label: "チェックリスト", show: !!topic.checklist?.length },
  ].filter((t) => t.show);

  return (
    <main className="flex flex-col flex-1 w-full md:w-3/5 mx-auto px-4 md:px-0 py-8">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:underline mb-4"
      >
        ← 一覧へ
      </Link>
      <h1 className="text-2xl font-bold mb-6">{topic.title}</h1>

      <Tabs defaultValue={tabs[0].value} className="w-full">
        <TabsList
          className="grid w-full"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
          }}
        >
          {tabs.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* 概要 */}
        <TabsContent value="overview" className="mt-4 rounded-lg border p-4">
          {topic.overview.map((para, i) => (
            <p
              key={i}
              className="text-sm leading-7 text-muted-foreground [&:not(:first-child)]:mt-3"
            >
              {para}
            </p>
          ))}
        </TabsContent>

        {/* 実例 */}
        <TabsContent value="examples" className="mt-4 rounded-lg border p-4">
          <div className="flex flex-col gap-6">
            {topic.examples?.map((ex, i) => (
              <figure key={i}>
                {ex.image ? (
                  <Image
                    src={ex.image}
                    alt={ex.caption}
                    width={800}
                    height={480}
                    className="rounded-md border w-full h-auto"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground">
                    スクショ未登録
                  </div>
                )}
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {ex.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </TabsContent>

        {/* チェックリスト */}
        <TabsContent value="checklist" className="mt-4 rounded-lg border p-4">
          <ul className="flex flex-col gap-4">
            {topic.checklist?.map((item) => (
              <li key={item.id} className="flex gap-3">
                <Checkbox id={item.id} className="mt-1" />
                <div className="flex flex-col">
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium leading-snug"
                  >
                    {item.label}
                  </label>
                  {item.hint && (
                    <span className="mt-1 text-xs text-muted-foreground">
                      {item.hint}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </main>
  );
}
