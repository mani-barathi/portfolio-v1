import sanity from "../sanity";

export const getProjects = async () => {
  try {
    const data = await sanity.fetch(
      `*[_type == 'project'] | order(order asc) { ..., 'imageUrl': image.asset->url }`
    );
    return data.filter((obj) => obj.show);
  } catch (e) {
    console.log("getProjects: ", e);
    return [];
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch("https://api.hashnode.com", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const { data } = await res.json();
    return data.user.publication.posts;
  } catch (e) {
    console.log("getBlogs: ", e);
    return [];
  }
};

const query = `
    {
        user(username:"manibarathi") {
            publication {
                posts {
                    _id
                    title
                    slug
                }
            }
        }
    }`;
