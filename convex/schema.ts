import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        user: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal("candidate"), v.literal("interviewer")), // "candidate and interviewer"
        clerkId: v.string(),  

    }).index("by_clerk_id", ["clerkId"]),
})

