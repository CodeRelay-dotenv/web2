"use client"


import { useApiMutation } from "@/hooks/useApiMutation";
import { List } from "./list";
import { NewButton } from "./newButton";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";


export function Sidebar() {
  const {mutate:createQ,isLoading} = useApiMutation(api.qna.deleteAnswer);
const id = "jn73a3agrez3x1gq2ay46nry797ab17z";
const id_1="jh7by5vpftfaf2zf5tpygk39217absjf";
  const handleNewQuestion = () =>{
    createQ({answer_id: id as Id<"answer">,
      question_id: id_1 as Id<"questions">
    })
        .then((question)=>{
          console.log("Bangya Question",question)
          toast.success("Bangya question")
        })
        .catch(()=>{
          console.log("Error in question creation")
          toast.error("Error while creating question")
        })
  }




  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
      <button onClick={handleNewQuestion}>A</button>
    </aside>
  );
}

{/* createQ({id: id as Id<"questions">
  ,title:"Second Question",
    question_detail:"Second question bnaya hua h",
    tag:"admin"})
    .then((question)=>{
      console.log("Bangya Question",question)
      toast.success("Bangya question")
    })
    .catch(()=>{
      console.log("Error in question creation")
      toast.error("Error while creating question")
    })
}
*/}




{
 /* const {mutate:createQ,isLoading} = useApiMutation(api.qna.createAnswer);
const id = "jh7by5vpftfaf2zf5tpygk39217absjf";
  const handleNewQuestion = () =>{
    createQ({question_id: id as Id<"questions">,
      answer_detail:"answer to this question is quite simple i must say"
    })
        .then((question)=>{
          console.log("Bangya Question",question)
          toast.success("Bangya question")
        })
        .catch(()=>{
          console.log("Error in question creation")
          toast.error("Error while creating question")
        })
  }
*/
}


{
  /*
  const {mutate:createQ,isLoading} = useApiMutation(api.qna.updateLikeAnswer);
  const id = "jn73a3agrez3x1gq2ay46nry797ab17z";
    const handleNewQuestion = () =>{
      createQ({answer_id: id as Id<"answer">,
        like:2
      })
          .then((question)=>{
            console.log("Bangya Question",question)
            toast.success("Bangya question")
          })
          .catch(()=>{
            console.log("Error in question creation")
            toast.error("Error while creating question")
          })
    }
  */
}