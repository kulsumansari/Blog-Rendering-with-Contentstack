import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { getAllBlogs } from '../utils/apiCalls'
import { HomePageProps, BlogTileProps  } from '../utils/interface'
import styles from '../styles/Home.module.css'
import BlogTile from '../components/BlogTiles/blogTile'

interface Props{
  blogData: [BlogTileProps]
}

export const getServerSideProps: GetServerSideProps<Props> = async(context) => {
  let data = await getAllBlogs()
  let blogs:[BlogTileProps] = data.map((item :any)=>{
    return {
      blogUId : item.uid,
      blogTitle :item.title,
      author:item.author[0].title,
      blogImage:item.blogimage.url,
    }
  })
  return {
    props : {
      blogData: blogs,
    },
  }
}

const Home: NextPage<HomePageProps> = ({ blogData}) => {
  return (
      <main className={styles.Container}>
        <h1 className={styles.header}> BloGet's Reading List</h1>
        
       <div className={styles.blogContainer}>
            {    
            <>
                {blogData.map((blog)=> (
                    <BlogTile key = {blog.blogUId} data={blog} />
                ))}
            </>
            }    
        </div> 
      </main>
  )
}

export default Home;
