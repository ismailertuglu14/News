export default function Page() {
    return (
        <div className="mx-auto max-w-[1000px] py-4 space-y-4">
            <h1 className="text-[24px] font-bold">PhiHaber Künyesi</h1>
            <p>İsim: PhiHaber</p>
            <p>Tür: Haber sitesi</p>
            <p>Kuruluş: 2023</p>
            <p>Genel Merkez: İstanbul, Türkiye</p>
            <p>Dil: Türkçe</p>
            <p>Finansman: Reklam gelirleri</p>
            <p>İçerik:</p>
            <ul className="list-disc list-inside">
                <li>Türkiye ve dünyadan güncel haberler</li>
                <li>Siyasi, ekonomik, sosyal ve kültürel içerikler</li>
                <li>Haber yorumları ve analizleri</li>
                <li>Fotoğraf ve video galerileri</li>
                <li>Sosyal medya paylaşımları</li>
            </ul>
            <p>Yönetim Kurulu:</p>
            <ul className="list-disc list-inside">
                <li>CEO: Mehmet Can Kuru</li>
            </ul>
            <p>Yazarlar:</p>
            <ul className="list-disc list-inside">
                <li>Ahmet Cebecisoy</li>
                <li>Ali Demir</li>
                <li>Burkay Aksoy</li>
                <li>Ayşe Yılmaz</li>
                <li>Funda Tan</li>
            </ul>
            <p>Teknik Ekip:</p>
            <ul className="list-disc list-inside">
                <li><a href="/hukumler-ve-kosullar">Hükümler & Koşullar</a></li>
                <li><a href="/gizlilik-politikasi">Gizlilik Politikası</a></li>
                <li><a href="/cerezler">Çerez Politikası</a></li>
            </ul>
            <p>İletişim:</p>
            <ul className="list-disc list-inside">
                <li>E-posta: info@phihaber.com</li>
                <li>Sosyal medya: X - @phihaber</li>
            </ul>
        </div>
    )
}