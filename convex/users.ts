import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query for creating user..
export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return;

    return await ctx.db.insert("users", {
      ...args,
      role: "candidate",
    });
  },
});

// Query for getting all users
export const getUsers = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Looks like User is not authenticated");
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

// Query for getting user by clerkId - means Authenticated User...
export const getUserByClerkId = query({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});