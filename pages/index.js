import Head from 'next/head';

const Index = () => {
    const title = "LCFR: VKYD's wick3d CDN";
    const description = "Hi, I'm Krish! A technophile and an engineering student from New Delhi. I aspire to develop ‘smarter’ energy sources with the lines I type.";
    const keywords = "Krish Goel Skywalker Developer Freelancer Website Web Development Programming Engineering Imagineer New Delhi Coding UX UI Sanskriti School KrishSkywalker";

    return (
        <div className="container">
            <Head>

                {/* Naming meta */}
                <title>{title}</title>
                <meta content={title} name="title" />
                <meta content={description} name="description" />
                <meta content={keywords} name="keywords" />
                
                {/* Contact meta */}
                <meta content="Krish Goel · KrishSkywalker" name="author" />
                <link href="https://github.com/VKYD" rel="me" type="text/html" />
                <link href="mailto:vkydclothing@gmail.com" rel="me" />
                
                {/* Browser config meta */}
                <meta content="utf-8" name="charset" />
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width,initial-scale=1,user-scalable=no" name="viewport" />
                <link rel="manifest" href="/manifest.json" />
                <meta content="English" name="language" />
                <base href="/" />
                <meta content="#000000" name="theme-color" meta="meta" />
                <meta content="#e8026a" name="msapplication-TileColor" />

                {/* Open Graph tags */}
                <meta content="website" property="og:type" />
                <meta content="https://vkyd.in" property="og:url" />
                <meta content={title} property="og:title" />
                <meta content={description} property="og:description" />
                <meta property="og:image" src="https://vkyd-next-js-cdn.vercel.app/images/meta.png" />
                <meta content="en_US" property="og:locale" />
                
                {/* Twitter tags */}
                <meta content="summary" name="twitter:card" />
                <meta content="http://www.vkyd.in" name="twitter:url" />
                <meta content={title} name="twitter:title" />
                <meta content={description} name="twitter:description" />
                <meta content="https://vkyd-next-js-cdn.vercel.app/images/twitter_meta.png" name="twitter:image" />

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
            <div className="sub-container">
                <img src="/logo.svg" /> 
                <h2>VKYD's wick3d CDN</h2>
                <h3>
                    Check us out at &nbsp;
                    <a href="https://vkyd.in">vkyd.in</a>
                </h3>
            </div>

            <style jsx>{`
                ::selection {
                    background-color: #000000;
                    color: #dddddd
                }

                .container {
                    width: 100%;
                    height: 120vh;
                    text-align: center;
                    text-align: -webkit-center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    
                    background-color: #333333;
                }
                .sub-container {
                    text-align: -webkit-center;
                    width: 60%;
                    max-width: 500px;
                    background-color: #333333;
                    border-radius: 20px;
                    padding: 40px 40px;
                    color: #aaaaaa;
                    box-shadow: 12px 12px 16px 0 #00000088,
                                -8px -8px 12px 0 #4242424f;
                }

                @font-face {
                    font-family: Poppins;
                    src: url(fonts/Poppins-Regular.ttf);
                }
                
                img {
                    width: 400px
                }

                h2 {
                    font-family: Poppins;
                    font-size: calc(1.1rem + 0.3vw);
                }
                @media (min-width: 1200px) {
                    h2 a {
                        font-size: 1.5rem;
                    }
                }
                h3 {
                    font-size: 1.2rem;
                    font-family: Poppins;
                    margin: 0px; 
                    padding: 0
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