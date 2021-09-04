import type { PostData } from "$utils/posts";

export const get = async (): Promise<{ body: string }> => {
    const imports = import.meta.glob("./blog/*.{md,svx}");
    const body: Promise<PostData>[] = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata }) => {
                return {
                    path,
                    metadata
                };
            })
        );
    }

    const posts = await Promise.all(body);

    return {
        body: JSON.stringify(posts)
    };
};
