import { v } from "convex/values";
import { defineTable, defineSchema } from "convex/server";



export default defineSchema({
  user:defineTable({
    name:v.string(),
    user_id:v.string(),
    reputation:v.number(),
    like:v.optional(v.number()),
  })
  .index("by_user_id",["user_id"]),

  questions:defineTable({
    title:v.string(),
    question_detail:v.string(),
    tag:v.union(v.literal('help'),v.literal('admin'),v.literal('study')),
    answers:v.array(v.id("answer"))
  }),

  answer:defineTable({
    answer_detail:v.string(),
    like:v.optional(v.number()),
    user_id:v.id("user"),
    question_id:v.id("questions"),
  }),

  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_org", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
  
  userFavourites: defineTable({
    orgId: v.string(),
    userId: v.string(),
    boardId: v.id("boards"),
  })
    .index("by_board", ["boardId"])
    .index("by_user_org", ["userId", "orgId"])
    .index("by_user_board", ["userId", "boardId"])
    .index("by_user_board_org", ["userId", "boardId", "orgId"]),
});