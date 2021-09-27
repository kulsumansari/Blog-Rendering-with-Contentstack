import '../styles/globals.css'
import { pageProps } from '../utils/interface'
import Head from 'next/head'
import { getNavbarData,getFooterData } from '../utils/apiCalls'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

function MyApp ({ Component, pageProps,navData , footerData}: pageProps ) {
    return(<>
        <Head>
            <title>{navData.companyName}</title>
            <link rel='icon' href={navData.logoImage.src} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300&family=Saira+Semi+Condensed&display=swap" rel="stylesheet"></link>
        </Head>
        <NavBar navData = {navData}/>
        <Component {...pageProps} />
        <Footer footerData = {footerData} />
        </>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }:any) => {
    const {company_name, logo , nav_links} = await getNavbarData()
    let navLinks  = nav_links.map((elem:any)=>{
        return {
        linkId :elem.link.uuid,
        linkTitle : elem.link.title,
        linkHref : elem.link.href,
        isCta: elem.is_cta
        }
    })

    const navData= {
        companyName:company_name,
        logoImage: {
            src:logo.logoimage.url,
            alt:logo.alternate_text,
            },
            navLinks : navLinks
    }
    
    const {footer_logo , media_links} = await getFooterData()
    let footerLinks = media_links.map((elem:any)=>{
        return {
        linkId :elem.media_links._metadata.uid,
        linkHref : elem.media_links.link.href,
        linkIcon: elem.media_links.link_icon
        }
    })

    const footerData={
        companyName :company_name,
        footer_logo :{
            src : footer_logo.logo_image.url,
            alt : footer_logo.alternate_text
        },
        footerLinks: footerLinks
    }

    let pageProps = {};
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps, navData  , footerData};
}

export default MyApp;


 