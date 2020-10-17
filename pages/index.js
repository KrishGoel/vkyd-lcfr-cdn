import Head from 'next/head';

const Index = () => {
    return (
        <div className="container">
            <Head>
                <title>VKYD CDN</title>

                <meta content="Krish Goel · KrishSkywalker" name="title" />
                <meta content="Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop ‘smarter’ energy sources with the lines I type." name="description" />
                <meta content="Krish Goel Skywalker Developer Freelancer Website Web Development Programming Engineering Imagineer New Delhi Coding UX UI Sanskriti School KrishSkywalker" name="keywords" />
                <meta content="utf-8" name="charset" />
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width,initial-scale=1,user-scalable=no" name="viewport" />
                <link rel="manifest" href="/manifest.json" />
                <meta content="English" name="language" />
                <meta content="Krish Goel · KrishSkywalker" name="author" />
                <meta content="#8a7df2" name="theme-color" meta="meta" />
                <meta content="#8a7df2" name="msapplication-TileColor" />
                <link href="https://github.com/KrishSkywalker" rel="me" type="text/html" />
                <link href="mailto:krishgoel3@gmail.com" rel="me" />
                <base href="/" />

                {/* Open Graph tags */}
                <meta content="website" property="og:type" />
                <meta content="https://krishgoel.com" property="og:url" />
                <meta content="Krish Goel · KrishSkywalker" property="og:title" />
                <meta content="Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop ‘smarter’ energy sources with the lines I type." property="og:description" />
                <meta property="og:image" src="https://krishgoel.vercel.app/images/meta.png" />
                <meta content="en_US" property="og:locale" />
                
                {/* Twitter tags */}
                <meta content="summary" name="twitter:card" />
                <meta content="http://www.krishgoel.com" name="twitter:url" />
                <meta content="Krish Goel · KrishSkywalker" name="twitter:title" />
                <meta content="Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop ‘smarter’ energy sources with the lines I type." name="twitter:description" />
                <meta content="https://krishgoel.vercel.app/images/twitter_meta.png" name="twitter:image" />

                {/* Icons */}
                <link href="/icons/favicon.png" rel="shortcut icon" type="image/png" /> 
                <link href="/icons/favicon.png" rel="icon" type="image/png" />
                <link href="/icons/apple-touch-icon-180x180.png" rel="icon" sizes="180x180" type="image/png" />
                <link href="/icons/apple-touch-icon-152x152.png" rel="icon" sizes="152x152" type="image/png" />
                <link href="/icons/safari-pinned-tab.svg" rel="mask-icon" />
                <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" />
                <link href="/icons/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
                <link href="/icons/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
                <link href="/icons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
                <link href="/icons/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
                <link href="/icons/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
                <link href="/icons/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
                <link href="/icons/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
                <link href="/icons/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
            </Head>

            <h1>VKYD</h1>
            <h2>
                Pseduo-CDN
                <br /><br />
                Check us out at &nbsp;
                <a href="https://vkyd.in">vkyd.in</a>
            </h2>
            
            <style jsx>{`
                .container {
                    text-align: center;
                    margin-top: 100px
                }

                @font-face {
                    font-family: Plateia;
                    src: url(fonts/Plateia-Bold.ttf);
                }
                @font-face {
                    font-family: Poppins;
                    src: url(fonts/Poppins-Regular.ttf);
                }

                h1 {
                    font-size: calc(1.355rem + 6vw);
                    font-family: Plateia;
                }
                h2 {
                    font-size: 1.2rem;
                    font-family: Poppins;
                }
                a {
                    text-decoration: none;
                    color: #e8026a;
                    transition: 0.2s
                }
                a:hover {
                    padding-bottom: 5px;
                    border-bottom: 2px solid #e8026a;
                }

            `}</style>
        </div>
    )
};

export default Index;