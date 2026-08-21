import {
  bigint,
  boolean,
  index,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * The schema is the source of truth and lives in git — that is the whole
 * reason this project carries an ORM. Change it here, then `npm run db:push`.
 *
 * `called` and `notes` are the operator's own workflow columns: the public site
 * never writes them, only /admin does.
 */
export const leads = pgTable(
  "leads",
  {
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    callHour: text("call_hour"),
    message: text("message"),
    page: text("page"),
    called: boolean("called").notNull().default(false),
    notes: text("notes"),
  },
  (table) => [index("leads_created_at_idx").on(table.createdAt.desc())]
);

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
