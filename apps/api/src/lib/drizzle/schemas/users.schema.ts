import { createdAt, id, updatedAt } from '@/lib/drizzle/utils/columns';
import { getTableColumns, relations } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { userRolesSchema } from './user-roles.schema';

export const usersSchema = pgTable('users', {
  id,
  userRoleId: varchar('user_role_id', { length: 255 })
    .notNull()
    .references(() => userRolesSchema.id),
  createdAt,
  updatedAt,
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
});

export const usersRelations = relations(usersSchema, ({ one }) => ({
  userRole: one(userRolesSchema, {
    fields: [usersSchema.userRoleId],
    references: [userRolesSchema.id],
  }),
}));

// Exported constants
export const USERS_COLUMNS = Object.keys(getTableColumns(usersSchema)) as [
  keyof typeof usersSchema.$inferSelect,
];
