import { client, type Blog } from "@/app/lib/microcms";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default async function Home() {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      カラー
      <Tabs defaultValue="tab1" className="w-full max-w-lg">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">チェックリスト</TabsTrigger>
          <TabsTrigger value="tab2">こころがまえ</TabsTrigger>
          <TabsTrigger value="tab3">実例</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="mt-4 rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">チェックリスト</h3>
          <div className="mt-2 flex items-center gap-2">
            <Checkbox id="task1" />
            <label htmlFor="task1">
              赤緑色覚異常をはじめとした色盲の人に配慮できているか
            </label>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Checkbox id="task2" />
            <label htmlFor="task2">
              赤緑色覚異常をはじめとした色盲の人に配慮できているか
            </label>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="mt-4 rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">詳細</h3>
          <p className="text-sm text-muted-foreground">
            className に Tailwind のクラスを渡すだけでスタイルを変更できます。
          </p>
        </TabsContent>
        <TabsContent value="tab3" className="mt-4 rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">設定</h3>
          <p className="text-sm text-muted-foreground">
            components/ui/tabs.tsx
            を直接編集してデフォルトスタイルも変更可能です。
          </p>
        </TabsContent>
      </Tabs>
      <Link href={"/ui"}>UIPage</Link>
      <p>とぷ</p>
      思ったことを書く
      <hr />
      <div>
        {data.contents.map((item: Blog) => {
          return (
            <div key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// type MicroCMSImage,
// type MicroCMSListContent,がある
