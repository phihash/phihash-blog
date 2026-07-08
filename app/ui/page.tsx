import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function UIPage() {
  return (
    <>
      <h1>UIページ</h1>
      <p>shadcn/ui を入れれば Radix UI も裏で使われるので、shadcn/ui 一択で</p>
      そもそもの構造 Radix UI (土台・部品の動き) ↑ の上に乗っている shadcn/ui
      (見た目 + 土台セット) Radix UI — 「動きだけ」のパーツ集 -
      タブをクリックしたら切り替わる、ドロップダウンが開閉する、といった振る舞い（ロジック）だけを提供する
      - 見た目は一切ない（ヘッドレス）。CSSは全部自分で書く -
      アクセシビリティ（キーボード操作、スクリーンリーダー対応）は組み込み済み
      shadcn/ui — 「Radix UI + Tailwindの見た目」セット - Radix UI の上に
      Tailwind CSS で見た目をつけたもの - npx shadcn add tabs
      するとソースコードがプロジェクトにコピーされる（npm パッケージではない） -
      コピーされたコードを直接いじれるので、カスタマイズが自由 Headless UI —
      Radix UI の別バージョン的なもの - Tailwind Labs（Tailwind
      の開発元）が作った、Radix UI と同じ「動きだけ」のライブラリ - Radix UI
      より対応コンポーネントが少ない - shadcn/ui は Headless UI ではなく Radix
      UI を採用している まとめ 自分でCSS書きたい → Radix UI（動きだけもらう）
      すぐ使いたい → shadcn/ui（動き＋見た目セット）✅ おすすめ
      <br />
      npx shadcn@latest init | npx shadcn@latest add tabs
      <h2>Tabsでも</h2>
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1">タブ1</TabsTrigger>
          <TabsTrigger value="tab2">タブ2</TabsTrigger>
          <TabsTrigger value="tab3">タブ3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          タブ1の内容です。ここに好きなコンテンツを入れられます。
        </TabsContent>
        <TabsContent value="tab2">
          タブ2の内容です。ここに好きなコンテンツを入れられます。
        </TabsContent>
        <TabsContent value="tab3">
          タブ3の内容です。ここに好きなコンテンツを入れられます。
        </TabsContent>
      </Tabs>
    </>
  );
}
