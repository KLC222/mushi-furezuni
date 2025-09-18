export default function Warning() {
    return <>

        <h3 className="py-5 my-2 d-flex justify-content-center">正規サイトについて</h3>
        <div className="product_description mb-3">
            <h5>＜！注意喚起＞</h5>
            <p>最近、偽のウェブサイトが出回っております。これらのサイトにアクセスすると、個人情報の漏洩や詐欺の被害に遭う可能性があります。</p>
            <p>虫フレズニー公式サイトのURLは以下のものです。必ずこのURLを確認いただくようお願いいたします。</p>
            <ul>
                <li>虫フレズニーウェブサイト
                <a href="https://furezuni.com/">https://furezuni.com/</a>
                    <br />
                </li>
                <li>ミンネページ
                <a href='https://minne.com/@earthtenaru'>https://minne.com/@earthtenaru</a>
                </li>
                <li>カラーミーショップ
                <a href='https://earthtenaru.shop-pro.jp/'>https://earthtenaru.shop-pro.jp/</a>
                </li>
                <li>BASEショップ
                <a href='https://earthtenaru.base.shop/'>https://earthtenaru.base.shop/</a>
                </li>
            </ul>
            <p className="py-1 fw-bold">上記のサイト以外は当社とは全く関係のないサイトでありますので、そのサイトで購入した場合、当社では販売の責任を負いかねます。</p>
            <br />
            <h5>お問い合わせ</h5>
            <p>正規サイトに関する疑問や不安がある場合は、以下の連絡先までお問い合わせください。</p>
            メール：info@furezuni.com
        </div>
    </>
}