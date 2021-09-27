import * as Contentstack from 'contentstack';

const Stack = Contentstack.Stack(
                    process.env.API_KEY || "",
                    process.env.TOKEN || "",
                    process.env.ENV ||""
                );

export const getNavbarData = async () =>{
    const Query = await Stack.ContentType('navbar').Entry("bltc4a9de5a07a54431").fetch()
    let data = await Query.toJSON()
    return data;
}

export const getAllBlogs = async() =>{
    const blogEntries  = await Stack.ContentType('blogdata')
            .Query()
            .includeReference('author')
            .toJSON()
            .find();
    return blogEntries[0];
}

export const getBlogById = async (uid:string) =>{
    const Query = await Stack.ContentType('blogdata').Entry(uid).includeReference(['author']).fetch()
    let data = await Query.toJSON()
    return data;
}

export const getFooterData = async() =>{
    const footerData  = await Stack.ContentType('footer')
            .Query()
            .toJSON()
            .find();
    return footerData[0][0];
}



