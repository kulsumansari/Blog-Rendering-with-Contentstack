import type { AppProps } from 'next/app'

export interface pageProps extends AppProps{
    navData : navbarProps,
    footerData : footerProps
}

export interface HomePageProps{
    blogData: [BlogTileProps],
}

export interface BlogPageProps{
    blog:BlogData
}

export interface navbarProps{
    companyName:string,
    logoImage:{
      src:string,
      alt:string,
    }
    navLinks:[Links]
}

export interface footerProps{
    companyName:string,
    footer_logo:{
      src:string,
      alt:string,
    }
    footerLinks:[{
        linkId:string,
        linkIcon:string,
        linkHref:string
    }]
}

export interface BlogTileProps{
    blogUId: string,
    blogTitle:string,
    blogImage:string,
    author:string
}

export interface BlogData{
    blogUId:string,
    blogTitle: string,
    blogContent:string,
    blogImage:string,
    relatedLinks: [Links],
    createdAt:string,
    author:string,
    tags:string[],
}

export interface Links{
    linkTitle:string,
    linkHref:string,
    linkId:string,
    isCta?:boolean
}
