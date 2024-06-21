import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "./base-entity.js";

/**
 * @property {number} id
 * @property {Date} created
 * @property {Date} last_modified
 * @property {string} name
 */
export class Catchment extends BaseEntity {
  /**
   * @param {string} name
   */
  constructor(name) {
    super();
    this.name = name;
  }
}

export const schema = new EntitySchema({
  class: Catchment,
  extends: "BaseEntity",
  tableName: "rcr_catchment",
  properties: {
    name: { type: "string" },
    rivers: {
      kind: "1:m",
      mappedBy: "catchment",
      type: "River",
    },
  },
});
