export type Post = {
    slug: string;
    metadata: {
        title: string;
        description: string;
        date: Date;
        thumbnail: string;
        category: string;
    };
};

export type PostData = {
    path: string;
    metadata: {
        title: string;
        description: string;
        date: string;
        thumbnail: string;
        category: string;
    };
};

export const convertToPost = (data: PostData): Post => {
    return {
        slug: data.path.replace(/\.[^/.]+$/, ""),
        metadata: {
            ...data.metadata,
            date: new Date(data.metadata.date)
        }
    };
};
