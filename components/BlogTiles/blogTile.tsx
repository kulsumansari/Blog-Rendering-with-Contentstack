import React from 'react';
import Link from 'next/link'
import styles from './blogTile.module.css'
import {BlogTileProps} from '../../utils/interface'

interface Props{
    data:BlogTileProps
}

const BlogTile:React.FC<Props>=({data})=>{
    let {blogUId, blogTitle , author , blogImage} = data
    return(
        <div className={styles.blogTile} id={blogUId}>
            <div className={styles.blogTileContent}>
                <Link href={`/${blogUId}`} >
                    <h2 className={styles.link} >{blogTitle}</h2>
                </Link>
                <p className={styles.author}>{author}</p>
            </div>
            <div className={styles.image}>
                <img src={blogImage}  alt={blogTitle}/>
            </div>
        </div>
    )
}
export default BlogTile;

