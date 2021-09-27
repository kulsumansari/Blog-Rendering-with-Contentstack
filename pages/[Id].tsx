import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { getBlogById } from '../utils/apiCalls'
import { BlogPageProps,BlogData} from '../utils/interface'
import BlogComponent from '../components/BlogComponent/BlogComponent'

interface Props{
    blog:BlogData
}

export const getServerSideProps: GetServerSideProps<Props> = async(context) => {
    let {Id} =  context.query;
    let res;
    if(Id){
        res = await getBlogById(`${Id}`)
    }
    let linkArr = res.relatedlinks.map((link :any)=>{
        return {
            linkTitle : link.linkinfo.linktitle ,
            linkHref : link.linkinfo.reflink[0].uid,
            linkId : link.linkinfo.reflink[0].uid,
        }
    })

    let blog:BlogData ={
        blogUId:res.uid,
        blogTitle : res.title,
        blogContent: res.blogcontent,
        author:res.author[0].title,
        createdAt:res.created_at.split('T')[0],
        blogImage:res.blogimage.url,
        tags: res.tag,
        relatedLinks : linkArr    
    }

    return{
        props:{
            blog,
        }
    }
}

const Blog: NextPage<BlogPageProps> =({ blog })=>{
    return(<>
        <Head>
            <title>{blog.blogTitle}</title>
        </Head>
        <main>
            <BlogComponent blog={blog} />
        </main>
        </>
    )
}

export default Blog;