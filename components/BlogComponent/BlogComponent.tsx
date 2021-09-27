
import styles from'./BlogComponent.module.css'
import Link from 'next/link'
import {BlogData ,Links} from '../../utils/interface'

interface Props{
    blog:BlogData
}

const BlogComponent:React.FC <Props> =({blog})=>{
    let {blogUId ,blogTitle, blogContent, blogImage , relatedLinks,createdAt,author,tags} = blog
    return(
        <div className={styles.container} id={blogUId}>
            <div className={styles.blogContainer}>
                <div className={styles.blogHeader}>
                    <h1>{blogTitle}</h1>
                    <div className={styles.headerDesc}>
                        <span>By : {author}</span>
                        <span>{createdAt}</span>
                    </div>
                </div>
                <div>
                    <img src={blogImage} alt={blogTitle}/>
                    <p>{blogContent}</p>
                </div>
            </div>
            <div className={styles.relatedLinks}>
                {relatedLinks ?
                        <div>
                            <h1>Related Links</h1>
                            <ul>
                                {relatedLinks.map((link : Links)=>{
                                    return( <li key = {link.linkId} className={styles.linkList}>
                                        <Link href={`/${link.linkHref}`}> 
                                            {link.linkTitle} 
                                        </Link>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        : <br/>
                    }
                </div>
        </div>
    )
}

export default BlogComponent;