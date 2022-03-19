import Head from 'next/head'

export const SEO: FC = ({title}) => {
    // customize meta properties
    // you can pass them as an argument like title in case you want to change for each page
    const description = "Минарасан лучшие санатории Сарыагаша"
    const keywords = "Сарыагаш санаторий,курорт сарыагаш,отдых,билет, забронировать"
    const siteURL = "https://minarasan.kz/";
    const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta property="vk:title" content="Бронирование Санаторий Сарыагаш"/>
            <meta property="vk:text" content="Онлайн бронирование путевок в Санатории Сарыагаш"/>
            <meta property="vk:url" content="https://minarasan.kz/" />
                {/* Twitter */}

                {/* Open Graph */}
                <meta property="og:url" content={siteURL} key="ogurl"/>
                <meta property="og:image" content={imagePreview} key="ogimage"/>
                <meta property="og:site_name" content={siteURL} key="ogsitename"/>
                <meta property="og:title" content={title} key="ogtitle"/>
                <meta property="og:description" content={description} key="ogdesc"/>
                <title>{title}</title>

                <link rel="manifest" href="/manifest.json"/>
                <link
                    href="/icons/icon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    purpose="any maskable"
                />
                <link
                    href="/icons/icon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    purpose="any maskable"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap"
                      rel="stylesheet"/>
                <meta name="theme-color" content="#EF4444"/>
        </Head>
)
}

