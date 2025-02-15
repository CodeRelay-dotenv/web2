import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

//controller to authenticate new user to convex database
export const createUser = mutation({
  args: {
    },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (!identity) {
      throw new Error("Unauthorized");
    }
    const user_identify = await ctx.db.query("user").withIndex("by_user_id", (q) =>
        q.eq("user_id", identity.subject)
      )
      .unique()

    if(!user_identify){
        const user_new = await ctx.db.insert("user", {
          name:identity.name,
          reputation:0,
          like:0,
          user_id: identity.subject,
      });
      if(user_new){
        return user_new;
      }
      
    }
    
    return user_identify;
    
  },
});

export const searchUser = mutation({
  args: { question_id: v.id("questions") },
  handler: async (ctx, args) => {
    // Ensure the caller is authenticated.
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    // Retrieve the answer document using the provided question ID.
    const answer = await ctx.db.get(args.question_id);
    if (!answer) {
      throw new Error("Answer not found");
    }

    // Instead of calling db.get on answer.user_id (which expects a valid Convex ID),
    // we query the "users" collection for a document where the "user_id" field matches.
    const user = await ctx.db
      .query("user", (q) => q.eq("user_id", answer.user_id))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});




export const searchUserAnswer = mutation({
  args: { answer_id: v.id("answer") },
  handler: async (ctx, args) => {
    // Ensure the caller is authenticated.
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    // Retrieve the answer document using the provided question ID.
    const answer = await ctx.db.get(args.answer_id);
    if (!answer) {
      throw new Error("Answer not found");
    }

    // Instead of calling db.get on answer.user_id (which expects a valid Convex ID),
    // we query the "users" collection for a document where the "user_id" field matches.
    const user = await ctx.db
       .query("user").filter((q) => q.eq(q.field("user_id"), answer.user_id))
       .first();

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});





export const createQuestion = mutation({
  args: {
    title:v.string(),
    question_detail:v.string(),
    tag:v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }
    const question_create = await ctx.db.insert("questions",{
      title:args.title,
      user_id: identity.subject,
      question_detail:args.question_detail,
      tag:args.tag,
      answers:[],
    })

    return question_create

  },
});



export const getAllQuestion = mutation({ // Changed from mutation to query
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const questions = await ctx.db
      .query("questions")
      .collect();

    return questions;
  },
});

export const getAllAnswer = mutation({
  args: {
    question_id:v.id("questions")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }
    const getanswer = await ctx.db.get(args.question_id)
    
    return getanswer.answers;

  },
});


export const searchQuestions = mutation({
  // The search text is passed as an argument.
  args: { searchText: v.string() },
  handler: async (ctx, args)  => {
    // Use q.search to filter documents by the "title" field.
    // Note: Make sure that full-text search is enabled on your collection or use an appropriate filter.
    const results = await ctx.db
      .query("questions", (q) => q.search("title", args.searchText))
      .collect();
    return results;
  },
});




export const updateQuestion = mutation({
  args: {
    title:v.string(),
    question_detail:v.string(),
    tag:v.string(),
    id:v.id("c")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }
    const question_update = await ctx.db.patch(args.id,{
      title:args.title,
      user_id: identity.subject,
      question_detail:args.question_detail,
      tag:args.tag
    })

    return question_update

  },
});




export const getSpecificQuestion = mutation({
  args: {
    id:v.id("questions")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const getanswer = await ctx.db.get(args.id);

  
    return getanswer
  },
});


export const getSpecificAnswer = mutation({
  args: {
    id:v.id("answer")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const getanswer = await ctx.db.get(args.id);

  
    return getanswer
  },
});





export const deleteQuestion = mutation({
  args: {
    id:v.id("questions")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }
    const deleteEntry = async(data) =>{
      await ctx.db.delete(data);
    }

    const getanswer = await ctx.db.get(args.id);

    if(getanswer.answers){
      // for iterating and deleting each record for answer
      getanswer.answers.map((val)=>{
        deleteEntry(val)
      })
    }

    await ctx.db.delete(args.id)
    return {status:200,message:"Successfully deleted the question entry"}
  },
});


//answer create controller for answer schema
export const createAnswer = mutation({
  args: {
    answer_detail: v.string(),
    question_id: v.id("questions"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const getanswer = await ctx.db.get(args.question_id)

    // Create the answer
    const answerId = await ctx.db.insert("answer", {
      answer_detail: args.answer_detail,
      question_id: args.question_id,
      user_id: identity.subject,
      like: 0,
    });
    
    // Update the question's answers array
    await ctx.db.patch(args.question_id, {
      answers: [...getanswer.answers,answerId]
    });


    const user = await ctx.db
    .query("user").filter((q) => q.eq(q.field("user_id"), identity.subject))
    .first();
    console.log("Subject---",identity.subject)
    console.log("Dikkat---",user)
    const rep = user.reputation;
    await ctx.db.patch(user._id, {
      reputation:(rep+2)
    });



    return answerId;
  },
});


//Answer update controller for answer schema
export const updateAnswer = mutation({
  args: {
    answer_detail: v.string(),
    answer_id: v.id("answer")
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");


    // Update the answer
    await ctx.db.patch(args.answer_id, {
      answer_detail: args.answer_detail,
    });

    return {status:200,message:"Successfully updated the answer entry"};
  },
});



//like update controller for answer schema
export const updateLikeAnswer = mutation({
  args: {
    answer_id: v.id("answer"),
    
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const data = await ctx.db.get(args.answer_id);
    // Update the answer
    const likeVal = data.like;
    await ctx.db.patch(args.answer_id, {
      like:(likeVal+1)
    });


    const user = await ctx.db
      .query("user").filter((q) => q.eq(q.field("user_id"),  data.user_id))
    .first();

    const rep = user.reputation;
    await ctx.db.patch(user._id, {
      reputation:(rep+10)
    });

    return {status:200,message:"Successfully updated the like entry"};
  },
});










//delete answer controller for answer schema
export const deleteAnswer = mutation({
  args: {
    answer_id: v.id("answer"),
    question_id: v.id("questions"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const getanswer = await ctx.db.get(args.question_id)

    const filteredNumbers = getanswer.answers.filter(id => id !== args.answer_id);

    await ctx.db.patch(args.question_id, {
      answers: [...filteredNumbers]
    });


    // Delete the answer
    await ctx.db.delete(args.answer_id);

    return {status:200,message:"Successfully deleted the answer entry"};
  },
});