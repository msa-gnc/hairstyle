const hairStyle = [
    {
        id:1,
        menStyles:[
            {
                id:1,
                title:"Mohawk Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/5vv7srWNRDIeK55tdUPInQ/60621f5becc76f5dfdb884a7da0ceb30/avc-mpg-hair-styling-for-modern-men-mohawk.jpg?fm=webp&w=555",
                description:"Bu stil, Pompadour ve Mohawk modellerini bir araya getirir. İçe doğru çıkıntılı bir görünümle gevşek bırakılmış uzun bir saç şeridi ve tıraş edilmiş kenarlar içerir. Faux Hawk kesim, Pompadour’dan daha şık görünür ancak Mohawk kesimin aksine iş hayatında dahi kullanılabilir. Pek çok varyantı olsa da Fade Faux Hawk en popüler stillerden biridir. Kısa Fade Mohawk olarak da bilinen bu stilde, saçın kenar kalınlığı, tepedeki sivri uçla orantılıdır. Fade etkisi daha yumuşaktır ve incelen saçlar üst kısımdaki büyük saç şeridi ile pürüzsüz biçimde karışır."
            },
            
            {
                id:2,
                title:"Faux Hawk Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/2gGqrl8pr7RBJwX6L9HnyW/030b0e089c734ed1f5685844972e009d/avc-mpg-hair-styling-for-modern-men-faux-hawk.jpg?fm=webp&w=555",
                description:"Asker tıraşı” olarak geçen erkek saç modelleri arasında, Crew kesim oldukça yaygındır ve hem az bakım gerektirmesi hem de çok kısa olması nedeniyle özellikle sporcular tarafından tercih edilir. Crew kesim, alın kısmından başın tepesine (başın tepesinin arkaya kıvrılmaya başladığı yere) doğru giderek kısalarak Fade etkili kenarları olan basit bir stildir."
            },
            {
                id:3,
                title:"Fade Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/2auHJqTwnIIphEmS87PTbt/af86dae04567e7e1d59db1b0b72330e0/avc-mpg-hair-styling-for-modern-men-fade-haircut.jpg?fm=webp&w=555",
                description:"1940'larda ve 50'lerde ABD Ordusu tarafından popüler hale getirilen fade erkek saç modelleri, son yıllarda sofistike bir stil olarak muazzam bir geri dönüş yaptı. Fade kesim stili, yanlardaki ve arkadaki saçların makasla mümkün olduğu kadar kısa kesildiği ve üstte belirli bir uzunlukta bırakılan saçın aşağıya doğru kısaltılarak soluklaşma görüntüsü kazandırıldığı bir modeldir.",
            },
            {
                id:4,
                title:"Undercut Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/Oui4bhNebNsa9ZqUyb46J/c90828de88e755a0f6bc3ef15a704413/avc-mpg-hair-styling-for-modern-men-undercut.jpg?fm=webp&w=555",
                description:"Undercut erkek saç stili, üst kısmın yanlarla kontrast oluşturduğu kısa-orta uzunlukta bir modeldir. Saçlar tepede uzun bırakılırken, yanlar (ve genellikle arkalar) kısa kesilir. Bu, üst ve yanlar arasında bir zıtlık yaratır. Undercut kesim, zamansız bir görünüm olduğu için oldukça popülerdir. Undercut saç modellerinin pek çok çeşidi vardır, ancak hepsinin ortak noktası üst kısmın uzun ve yanların ise kısa olmasıdır. ",
            },
            {
                id:5,
                title:"Taper Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/9qMibyieHtebSPSd7dIaY/63c4a6ef88a91b5e6946c37c5c578ada/avc-mpg-hair-styling-for-modern-men-taper-haircut.jpg?fm=webp&w=555",
                description:"“İş adamı saçı” olarak da bilinen Taper kesim, tüm erkek saç modelleri arasında belki de en kafa karıştırıcı olanıdır. Sanılanın aksine Fade kesim gibi değildir, olsa olsa saçı kademeler halinde kısalttığı söylenebilir. Taper kesim, kulağın yaklaşık bir santimetre yukarısından enseye kadar olan saçı kademeli olarak kısaltırken, Fade kesimde ise şakaktan aşağıya doğru 6mm/0,24 inç tıraş tarağı (genellikle 2 numara) altındaki herhangi bir uzunluğa kadar yanlar kısaltılır. Taper kesim, başın şeklini takip eden temiz çizgilere sahiptir, özellikle dalgalı veya kalın saçlar olmak üzere her tür saçta güzel görünür.",
            },
            {
                id:6,
                title:"Yan Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/6RDf3e5f8BC1YN12c3kfvL/40c9fbfc6d01f76851f699eb6d2bc5ef/avc-mpg-hair-styling-for-modern-men-side-part.jpg?fm=webp&w=555",
                description:"Bu stil temiz ve kısa bir saç modelidir ancak adından da anlaşılacağı gibi yan taraftaki saçlar belirgin görünümdedir. Geleneksel ve klasik görünümü nedeniyle “centilmen kesim” olarak da bilinir.",
            },
            {
                id:7,
                title:"Erkek Topuz Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/1gZYN9Rqd4BFqAhs6dG0mH/b4ab001fd12ca7d84edf6d02c81c98ef/avc-mpg-hair-styling-for-modern-men-man-bun.jpg?fm=webp&w=555",
                description:"Son birkaç yıldır oldukça popüler olan trend erkek saç modelleri arasında, “topuz” görünümü de yer alıyor. Bu saç modeli, isminden de belli olduğu üzere başın taç bölgesinde bir araya toplanmış bir at kuyruğundan (veya bir demet saçtan) oluşur. Bir erkek topuzu elde etmek için birden çok yöntem vardır:",
            },
            {
                id:8,
                title:"Pompadour Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/6oCycSuWJ7opsdq1A903fL/075cd05e7d402becd8a3456246f75fa7/avc-mpg-hair-styling-for-modern-men-pompadour.jpg?fm=webp&w=555",
                description:"Adını Kral XV. Louis'nin metresi Madame de Pompadour'dan alan bu model, alnın üzerine düşen saçın yukarı doğru bir hareketle yüzden uzağa doğru taranmış halinden oluşur. Pompadour saç, klasik ve modern birçok uyarlamaya sahiptir. Şu anda trend olan varyantlardan biri, Pompadour Fade olarak bilinir. Bu varyant Pompadour'un klasik bir versiyonudur, ancak yan tarafta değişken bir fade etkisine sahiptir.",
            },
            {
                id:9,
                title:"Quiff Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/3zvsSOlWQISbcX7lwFL2Ua/7d242154c447a6b3c5507e18a590b90a/avc-mpg-hair-styling-for-modern-men-quiff.jpg?fm=webp&w=555",
                description:"1950'lerde çıkışını yapan Quiff kesimi, kısa erkek saç modelleri arasında bulunuyor ve ilhamını Elvis gibi ilk dönem rock'n roll yıldızlarından alıyor. İsyan ve özgüven simgesi olan bu erkek saç stili, temel olarak Pompadour’a benzer ancak arkalar ve yanlar kısadır, üstteki uzun saçlar ise yukarı ve geri taranarak öne doğru düşürülür. Alnın üzerine hafifçe düşen saçların sağladığı görünümüyle Quiff kesim, Pompadour kesime göre daha dağınık yapıdadır ve onun kadar parlak görünmez.",
            },
            {
                id:10,
                title:"Fransız Kısa Kesim",
                image:"https://images.ctfassets.net/fjeyrovsyy5v/1igTDmx70vrn8lXY8ndywo/234d305851ab798ebd064b1d771c0a79/avc-mpg-hair-styling-for-modern-men-french-crop.jpg?fm=webp&w=555",
                description:"Klasik bir stil olan Fransız kısa kesim, üst kısımlarda uzun perçemler olan bir Undercut modelidir. Bu kesimin ana avantajı az bakım gerektirmesidir. 6-8 haftada bir rötuş yapmak yeterli olacaktır. Bu kesimi şekillendirmek son derece basittir, daha fazla dolgunluk istiyorsanız saç spreyi veya pomat ile bunu elde etmeniz mümkündür. En popüler varyantı, Fransız Fade kesim modelidir. Adından da anlaşılacağı gibi, bu model, yanlarda ve arkada güçlü bir Fade etkisine sahip olan Fransız kısa kesimidir.",
            },
        
        ]

    },
    
    {id:2,
        womenStyles:[
        {
            id: 1,
            title: "Pixie Kesim",
            image: "https://www.mehmettatlimecidiyekoy.com/yuklemeler/pixie-sac.jpg",
            description: "Pixie kesim, kısa ve modern bir saç modelidir. Genellikle asi ve özgüvenli bir görünüm yaratır. Yüz hatlarını ön plana çıkaran bu model, az bakım gerektirdiği için oldukça pratiktir."
        },
        {
            id: 2,
            title: "Bob Kesim",
            image: "https://accessland.live/wp-content/uploads/2024/03/Kirpik-Kut-BOB-jpg.webp",
            description: "Bob kesim, çene hizasında veya biraz daha uzun olabilen klasik bir saç modelidir. Modern ve şık bir görünüm sunar, düz veya dalgalı saçlarda harika durur."
        },
        {
            id: 3,
            title: "Lob Kesim",
            image: "https://cdn.dsmcdn.com/mrktng/seo/june2024/lob-sac-kesimi.jpg",
            description: "Lob (Long Bob) kesim, klasik bob kesimin daha uzun versiyonudur. Orta uzunluktaki saçlar için ideal olup, hem düz hem dalgalı saç tiplerine uygundur."
        },
        {
            id: 4,
            title: "Katlı Kesim",
            image: "https://i.pinimg.com/564x/46/9e/0c/469e0c9c5af63c8a754c87ac68c99c0b.jpg",
            description: "Katlı kesim, saça hacim kazandıran ve hareketli bir görünüm sağlayan çok yönlü bir modeldir. İnce telli saçlara dolgunluk katmak için idealdir."
        },
        {
            id: 5,
            title: "Shag Kesim",
            image: "https://iavogue.tmgrup.com.tr/original/22-01/12/sarasampaio_269866096_480432836928757_6934904128492772690_n.jpg",
            description: "70'lerin efsanevi saç kesimlerinden biri olan shag, dağınık ve hacimli bir görünüm sunar. Kıvırcık ve dalgalı saçlarda harika durur."
        },
        {
            id: 6,
            title: "Perde Kakül",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeur-G6I9orPRu3pRcf8xwrfUWFFihIPdSLA&sxample.com/perde-kakul.jpg",
            description: "Perde kakül, yüze yumuşak ve romantik bir çerçeve kazandıran popüler bir kesimdir. Uzun kaküller yandan ayrılarak doğal bir görünüm oluşturur."
        },
        {
            id: 7,
            title: "Uzun Dalgalı Kesim",
            image: "https://i.pinimg.com/550x/24/23/1c/24231c348d4fc0f1d813d8025a326446.jpg",
            description: "Uzun ve dalgalı saçlar, klasik ve romantik bir görünüm sunar. Doğal bir stil için hafif katlar eklenerek hareket kazandırılabilir."
        },
        {
            id: 8,
            title: "Asimetrik Bob",
            image: "https://i.pinimg.com/564x/94/bb/82/94bb8259d201565135e9c1a0325acac3.jpg",
            description: "Asimetrik bob, ön kısımların arkaya göre daha uzun olduğu cesur ve modern bir saç kesimidir. Farklı ve dikkat çekici bir görünüm isteyenler için idealdir."
        },
        {
            id: 9,
            title: "Küt Kesim",
            image: "https://i.pinimg.com/736x/78/a3/28/78a32894270dae2861dd36cbdc430f97.jpg",
            description: "Keskin hatlara sahip küt kesim, güçlü ve iddialı bir stil sunar. Genellikle düz saçlarda en iyi sonucu verir."
        },
        {
            id: 10,
            title: "Doğal Uzun Kesim",
            image: "https://i.pinimg.com/564x/0a/f4/af/0af4af406500957a49023185c3241022.jpg",
            description: "Doğal uzun saç modeli, minimal bakım gerektiren ve doğal güzelliği ön plana çıkaran bir kesimdir. Saçın sağlıklı görünmesi için düzenli bakım önerilir."
        }
    ]
    },
    {id:3,
        avatar:[
            {id:1,
                url:"https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid"
            },
            {id:2,
                url:"https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid"
            },
            {id:3,
                url:"https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid"
            },
            {id:4,
                url:"https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?semt=ais_hybrid"
            },
            {id:5,
                url:"https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175803.jpg?semt=ais_hybrid"
            },
            {id:6,
                url:"https://img.freepik.com/free-vector/woman-with-braided-hair-illustration_1308-174675.jpg?ga=GA1.1.1483889744.1741755748&semt=ais_hybrid"
            },
            {id:7,
                url:"https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869121.jpg?ga=GA1.1.1483889744.1741755748&semt=ais_hybrid"
            },
            {id:8,
                url:"https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56640.jpg?ga=GA1.1.1483889744.1741755748&semt=ais_hybrid"
            },
            {id:9,
                url:"https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869123.jpg?ga=GA1.1.1483889744.1741755748&semt=ais_hybrid"
            },
            {id:10,
                url:"https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?ga=GA1.1.1483889744.1741755748&semt=ais_hybrid"
            }
            
        ]
    }
    
    
    
]

export default hairStyle;