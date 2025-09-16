import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { useState } from 'react';
import NavTop from "./NavTop";
import Footer from "./Footer";

export default function Blog() {
  const [showFullContentList, setShowFullContentList] = useState([0]);

  const showContents = (content: number) => {
    // setBlogNumber(content);
    if (!showFullContentList.includes(content)) {
      setShowFullContentList([content, ...showFullContentList])
    }

  }

  function hideContents(content: number) {
    const removedList = showFullContentList.filter(item => item !== content)
    setShowFullContentList(removedList);

  }


  return <>
    <NavTop />
    <div className="blog_background">
      <Container>
        <div className="blog_board">
          <h1 className='text-center py-3 blog-contents'>ブログ </h1>
          <p>タイトルをクリックすると<a href="https://minne.com/@earthtenaru/letters" target='blank'>Minneのレター（ブログ）のページ</a>が開きます。</p>

          {/* card 1 */}
          <Card className='mt-5'>
            <Card.Header>2025年09月16日公開</Card.Header>
            <Card.Body>
              <Card.Title><a href="https://earthtenaru.shop-pro.jp/?mode=f10" target='blank'>虫フレズニーの正規サイト（リンクはカラーミーショップの記事です）
              </a></Card.Title>
              <Card.Text>
              ＜！注意＞虫フレズニーを販売している当社のサイト以外で、販売しているサイトが以前数件発覚いたしました。
              <br /><br />
                  そのようなサイトは当社とは全く関係のないサイトでありますので、そのサイトで購入した場合、当社では販売の責任を負いかねます。<br />
                  
                  どうぞこの記事にてご購入先のご確認をいただけますようお願いいたします。
                
                  

                {showFullContentList.includes(3) && (<>
                  <br /><br />
                  本サイト以外でご購入を希望される場合は以下のいずれかのサイトであるかをご確認を頂きたく存じます。
                  <br />
                  以下のサイト以外にアクセスすると、個人情報の漏洩や詐欺の被害に遭う可能性があります。
                  <br /><br />
                  ハンドメイドショップのミンネ<br />
                  <a href="https://minne.com/@earthtenaru">https://minne.com/@earthtenaru</a>
                  <br /><br />
                  カラーミーショップ<br />
                  <a href='https://earthtenaru.shop-pro.jp/'>https://earthtenaru.shop-pro.jp/</a>
                  <br /><br />
                  何卒よろしくお願い申し上げます。
                  

                </>
                )
                }


              </Card.Text>
              {!showFullContentList.includes(3) && (<Button className='custom-blog my-3' onClick={() => showContents(3)}>続きを読む</Button>)}
              {showFullContentList.includes(3) && (<Button className='custom-blog my-3' onClick={() => hideContents(3)}>閉じる</Button>)}
            </Card.Body>
          </Card>
          {/* card 1 end */}

          {/* card 2 */}

          <Card>
            <Card.Header>2022年11月21日公開</Card.Header>
            <Card.Body>
              <Card.Title><a href="https://minne.com/@earthtenaru/letters/62316" target='blank'>虫を捕まえる道具</a></Card.Title>
              <Card.Text>
                虫を捕まえる道具には一般的にどのようなものがあるのでしょうか。昔からある虫とり網は蝶々やトンボ、バッタ等々を生きたままで虫を捕まえることができる道具としてありますが、
                虫とり網のように生きたまま虫を捕まえる道具はそう多くはありません。
                {showFullContentList.includes(1) && (<>
                  <br /><br />
                  ハエ叩きはハエを叩いて撃退するような道具であり、粘着性シート状の虫取りシートはコバエやゴキブリ等々をシートに捕まえて処分するもの、蚊取り線香では薬草や薬剤で蚊を退治し、又、誘虫ランプでは虫を紫外線で誘引して蛾等の虫を高圧電流で撃退する道具というものであります。
                  <br /><br />
                  虫は一つの害虫のようなものということで私達の生活には必要ないものとして取り扱われているために虫は殺虫して処分する。又は撃退するということで生きたまま虫を捕まえる道具はあまり多くはなかったのではないでしょうか。
                  <br /><br />
                  各製薬会社が様々な虫に対して殺虫剤を開発しておりますが、そのほとんどのものは文字通りに虫を殺虫して処分するためのものという性質の製品であります。

                  <br /><br />
                  家にでるようなクモ、蟻、黄金虫、てんとう虫、毛虫、ヤモリ等々、虫といえども一つの生命でありますので、殺虫するというような罪悪感も少しでも持たないで済むようにしたいという方、
                  又、生きたまま虫を自然にもどしたい‥とにかく虫を自宅から放出したい‥という方には、この<a href='https://furezuni.com/products'>虫とり器</a>は最適な虫を捕まえる方法、道具になると思います。
                  片手でワンタッチで虫を捕まえる道具として是非ご活用ください。
                </>
                )}
              </Card.Text>
              {!showFullContentList.includes(1) && (<Button className='custom-blog my-3' onClick={() => showContents(1)}>続きを読む</Button>)}

              {showFullContentList.includes(1) && (<Button className='custom-blog my-3' onClick={() => hideContents(1)}>閉じる</Button>)}

            </Card.Body>
          </Card>
          {/* card 2 end */}

          {/* card 3 */}
          <Card className='mt-5'>
            <Card.Header>2022年03月17日公開</Card.Header>
            <Card.Body>
              <Card.Title><a href="https://minne.com/@earthtenaru/letters/52249" target='blank'>虫を潰す、潰さない
              </a></Card.Title>
              <Card.Text>
                虫を潰す、潰さない…か
                家に出てきた虫を遠慮なく潰すという方もいらっしゃいますが、むやみに虫を潰すことは出来るだけ避けた方が良いと思われます。


                {showFullContentList.includes(2) && (<>
                  <br /><br />特にゴキブリの内臓には赤痢菌、サルモネラ菌等々何10種類ともの菌が存在している可能性があるからです。

                  調理する台所では、潰すことによってお腹の中にある菌が食材等々にも下手をすると触れてしまいかねません。
                  したがって感染リスクを減らすためにも虫をむやみに潰すことは控えたほうが無難であります。

                  それによって辛い食中毒になることもあるのです。
                  <br /><br />
                  体験者としての話しですが、ある喫茶店で飲み物を注文した際、ストローを包んでいる紙包みに小さな虫(ゴキブリの幼虫)が潰れて付いておりました。
                  <br />ちょっと…と思いながらお店の店員さんをわざわざ呼ぶのも嫌だな…と思いまして(この飲み物はお店で開催していたレシート番号の抽選で当たった無料サービスの飲み物でありました)
                  虫が潰れて付いているところはストローを包んでいる紙包みの外側なので、ストローを袋から出して拭いて飲み物を飲みました。(友達とお店に来ておりましたので会話を遮らないために浅はかな対応をしてしまいました)
                  <br />しかし、それから自宅に帰ってからが地獄でした。
                  急にお腹が痛くなり、吐き気が止まらなく七転八倒でありました。

                  幸い自宅の隣が医院ということもあり、診察してもらうとやはり食中毒ということであり下剤を処方してもらいました…しかし約2日間はお腹の痛みに悪戦苦闘となりました。
                  <br /><br />
                  ３ミリくらいの小さな虫でしたが、恐るべき菌を保有していたのです。

                  小さな虫だから‥と侮らないで、虫を簡単に潰すということは控えたほうが無難であります。

                  そこで虫を潰さずにキャッチするのが、この<a href='https://furezuni.com/products'>虫とり器</a>となります。子供さんでも簡単に虫を潰さずに捕獲することが出来ます。
                </>
                )
                }


              </Card.Text>
              {!showFullContentList.includes(2) && (<Button className='custom-blog my-3' onClick={() => showContents(2)}>続きを読む</Button>)}
              {showFullContentList.includes(2) && (<Button className='custom-blog my-3' onClick={() => hideContents(2)}>閉じる</Button>)}
            </Card.Body>
          </Card>
          {/* card 3 end */}


          {/* card 4 */}
          <Card className='mt-5'>
            <Card.Header>2022年03月17日公開 | 2022年03月19日更新</Card.Header>
            <Card.Body>
              <Card.Title><a href="https://minne.com/@earthtenaru/letters/52248" target='blank'>殺虫した虫の処理方法
              </a></Card.Title>
              <Card.Text>
                ゴキブリ、ムカデ、蜘蛛、ダンゴ虫等々の虫に殺虫剤を噴射した時、その死骸をどのように捕まえているでしょうか。

                {showFullContentList.includes(3) && (<>
                  <br /><br />別に手でつまんでも全然平気で問題ないです…という方は本当にそれこそ問題はないと思いますが…

                  中には虫の死骸でも見たくないけど、仕方がないで…ティッシュペーパーで新聞で、牛乳パックを切って…等々で捕まえて処分している。

                  という方々も勿論いらっしゃいます。

                  <br /><br />その時に役立つものがこの<a href='https://furezuni.com/products'>虫をキャッチする虫とり器(虫フレズニー)</a>となります。

                  子供でも簡単に扱うことができるので、この製品を各部屋に設置しておけば、生きてある虫でも、殺虫剤を使って死んだ虫でも簡単に捕獲処分することが可能となります。
                </>
                )
                }


              </Card.Text>
              {!showFullContentList.includes(3) && (<Button className='custom-blog my-3' onClick={() => showContents(3)}>続きを読む</Button>)}
              {showFullContentList.includes(3) && (<Button className='custom-blog my-3' onClick={() => hideContents(3)}>閉じる</Button>)}
            </Card.Body>
          </Card>
          {/* card 4 end */}
          
          
          
        </div>
      </Container>
    </div>
    <Footer />
  </>
}