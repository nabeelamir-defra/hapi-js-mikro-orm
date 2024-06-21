"use strict";

import { Collection, ReferenceKind, EntitySchema, wrap } from "@mikro-orm/core";

/**
 * @property {number} id
 * @property {Date} created
 * @property {Date} last_modified
 */
export class BaseEntity {
  constructor() {
    this.created = new Date();
    this.last_modified = new Date();
    const props = wrap(this).__meta.properties;

    Object.keys(props).forEach((prop) => {
      if (
        [ReferenceKind.ONE_TO_MANY, ReferenceKind.MANY_TO_MANY].includes(
          props[prop].reference
        )
      ) {
        this[prop] = new Collection(this);
      }
    });
  }
}

export const schema = new EntitySchema({
  name: "BaseEntity",
  properties: {
    id: { primary: true, type: "number" },
    created: { type: "Date" },
    last_modified: { type: "Date", onUpdate: () => new Date() },
  },
});
