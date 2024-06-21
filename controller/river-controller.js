import { River } from "../model/river.js";
//import { orm } from "../db-config.js";

export default [
  {
    method: "GET",
    path: "/river",

    /**
     * Handler for fetching all rivers.
     *
     * @param {import('@hapi/hapi').Request & {em: (import('@mikro-orm/core').EntityManager)} } request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
     * @returns {Promise<Array<River>>} - A promise that resolves to an array of posts
     */
    handler: async (request, h) => {
      try {
        const riverRepo = request.em.getRepository(River);
        const rivers = await riverRepo.findAll(River);
        return h.response(rivers).code(200);
      } catch (error) {
        console.error("Error fetching rivers:", error);
        return h.response({ error: "Unable to fetch rivers" }).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/river/{id}",
    /**
     * Handler for fetching a river.
     *
     * @param {import('@hapi/hapi').Request & {em: (import('@mikro-orm/core').EntityManager)} } request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
     * @returns {Promise<River>} - A promise that resolves to an array of posts
     */
    handler: async (request, h) => {
      try {
        const riverRepo = request.em.getRepository(River);
        const river = await riverRepo.findOne();
        river.name;
      } catch (error) {
        console.error("Error fetching river:", error);
        return h.response({ error: "Unable to fetch river" }).code(500);
      }
    },
  },
];
