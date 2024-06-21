import { Catchment } from "../model/catchment.js";

export default [
  {
    method: "GET",
    path: "/catchment",
    handler: async (request, h) => {
      try {
        const catchmentRepo = request.em.getRepository(Catchment);
        const rivers = await catchmentRepo.findAll({ populate: ["rivers"] });
        return h.response(rivers).code(200);
      } catch (error) {
        console.error("Error fetching catchments:", error);
        return h.response({ error: "Unable to fetch catchments" }).code(500);
      }
    },
  },
];
