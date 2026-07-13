import { client, type Blog } from "@/app/lib/microcms";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default async function Home() {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans w-full md:w-4/5 mx-auto">
      <article className="w-full max-w-lg md:max-w-none pt-6 px-4 md:px-0">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
          UIデザインの基礎
        </h2>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">デザインの目的</h2>
          <p className="text-base leading-7 text-muted-foreground">
            デザインとは「設計」である。
          </p>
          <p className="text-base leading-7 text-muted-foreground mt-3">
            よくある誤解として、「デザインは絵である」「デザインとアートは同じである」というものがある。
            しかし、デザインは見た目の話だけでなく、その機能や働きによって課題を解決することである。
          </p>
          <p className="text-base leading-7 text-muted-foreground mt-3">
            デザインの原則は特定の領域に限らず広く適用できるため、ソフトウェアの差別化要因としてデザインは重要である。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">UI・UXとは</h2>
          <p className="text-base leading-7 text-muted-foreground">
            UIとはユーザーとサービスの接点のことである。
            人が物理的に制御できるように、リモコン、マウス、タッチパネルなどのインターフェースが必要である。
          </p>
          <p className="text-base leading-7 text-muted-foreground mt-3">
            UXとは広義的には、ユーザーがサービスを知った瞬間からのすべての体験を指す。
            UXの概念の発案者であるドナルド・ノーマンは、「UXは企業やサービスや製品について、ユーザーのやり取りのすべてを網羅するもの」と述べている。
          </p>
          <p className="text-base leading-7 text-muted-foreground mt-3">
            UIは目に見える客観的なもの、UXは主観的なものである。
            UXの設計手法としてカスタマージャーニーマップがある。
          </p>
          <p className="text-base leading-7 text-muted-foreground mt-3">
            UI単体を改善してもUXを根本的に改善できない。
            UXとは、対象に関わり始めてから忘れられるまでのすべての体験とされる。広告、セールス、サポートなど、UXに影響する要素は多岐にわたり、ユーザーの内面までを含めた概念である。
          </p>
        </section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
          デバイスについて
        </h2>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">入力手段の違い</h2>
          <p className="text-base leading-7 text-muted-foreground">
            本書は「PC」「スマートフォン」「タブレット」「TV」の4つのデバイスを対象としている。
            デバイスによって用途や使われる場が異なるため、最適なインターフェースも異なる。
          </p>
        </section>
      </article>
      一般的
      <Tabs defaultValue="tab21" className="w-full max-w-lg md:max-w-none">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tab21">概要</TabsTrigger>
          <TabsTrigger value="tab31">実例</TabsTrigger>
        </TabsList>

        <TabsContent value="tab21" className="mt-4 rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">概要</h3>
          <p className="text-sm">階層と構造</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Webサイトやアプリケーションは立体的な構造として成り立っている。ページの前後関係を無視してサービスをデザインすることはできない。
            <br />
            例1） Appleの場合、グローバルナビゲーション ＞
            ローカルナビゲーション と移動する。
            <br />
            その後、ローカルナビゲーションの見出しはタイトルに変化し、新たな動線も出現する。
            <br />
            例2） ケンブリッジ大学の場合
            グローバルナビゲーションは、現在のいる場所と、その下層をしめす。
            下層をクリックすると、先ほどいた場所が繰り上がり、表示される。
            <br />
            例3） iOSは1つ前のタイトルが戻るボタンの見出しとなる
            <br />
            人間はある状態から別の状態に変化する時、段階的に変化していくことを自然に感じる
            <br />
            画面の前後関係の理解を補助するためにインタラクションが有効である。
            例）
          </p>
          <p className="text-sm mt-3">深さと広さ</p>
          <p className="mt-1 text-sm text-muted-foreground">
            階層には深さと広さがある。基本的に反比例する。
            <br />
            一般的に、ユーザーは浅く広くの方が探しやすい。なぜなら、階層を上下する方が労力を伴うから。
            また階層が広い方が、ラベリングは排他的で具体的に命名しやすくなる。
            <br />
            ラベリングで重要なポイントは、<b>排他的</b>
            に命名すること。なぜなら、ユーザーを困惑させることになり認知負荷を向上させてしまうため。
            <br />
            階層が狭いと、すっきりとさせることはできるが、ラベリングはわかりにくくなる。
            <br />
            フォローアップとして、各メニューをクリックホバーすると、そのメニューの説明や概要などが表示されることがある。
            <br />
            階層が広いもののデメリットとして、カテゴリ数が多く、構造的にわかりにくさを冗長してしまう。
            あと、見た目の判断というか認知負荷はあるかも
            <br />
            スマホアプリにおいて、5タブ構成がよく見られるが、主要な機能以外はある1つにまとめられ、結果として抽象的ラベリングしていることに変わりないものがある。
            対策としたは、サブメニュー、ハンバーガーメニューなどでカテゴリ数をさらに設置する。
          </p>
          <p className="text-sm mt-3">現在地表記</p>
        </TabsContent>
        <TabsContent value="tab31" className="mt-4 rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">設定</h3>
          <p className="text-sm text-muted-foreground">
            npx shadcn init を実行でカラーファイルできる components/ui/tabs.tsx
            を直接編集してデフォルトスタイルも変更可能です。
          </p>
        </TabsContent>
      </Tabs>
      カラー
      <Tabs defaultValue="tab1" className="w-full max-w-lg md:max-w-none">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">チェックリスト</TabsTrigger>
          <TabsTrigger value="tab2">概要</TabsTrigger>
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
