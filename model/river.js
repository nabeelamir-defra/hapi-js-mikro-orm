import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "./base-entity.js";

/**
 * @property {number} id
 * @property {Date} created
 * @property {Date} last_modified
 * @property {string} name
 */
export class River extends BaseEntity {
  /**
   * @param {string} name
   */
  constructor(name) {
    super();
    this.name = name;
  }
}

export const schema = new EntitySchema({
  class: River,
  extends: "BaseEntity",
  tableName: "rcr_river",
  properties: {
    name: { type: "string" },
    catchment: { kind: "m:1", type: "Catchment" },
  },
});
