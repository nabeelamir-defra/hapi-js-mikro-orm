const { Post } = require("../entities/Post");

/**
 * PostController function to register routes for posts.
 *
 * @param {import('@hapi/hapi').Server} server - The Hapi server instance
 */

const PostController = (server) => {
  server.route({
    method: "GET",
    path: "/posts",
    /**
     * Handler for fetching all posts.
     *
     * @param {import('@hapi/hapi').Request} request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
     * @returns {Promise<Array<Post>>} - A promise that resolves to an array of posts
     */
    handler: async (request, h) => {
      const em = request.orm.em.fork(); // Create a new EntityManager instance
      const posts = await em.find(Post, {});
      return posts;
    },
  });
};
