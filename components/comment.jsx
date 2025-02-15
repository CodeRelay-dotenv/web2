"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { useEffect,useState } from "react";


export function Comment({ props,handleNew  ,dataRef, setDataRef,dataRef2, setDataRef2 }) {
    const {mutate:getAnswer,isLoading4} = useApiMutation(api.qna.getSpecificAnswer);
const [data,setData] = useState(null);

const {mutate: createA} = useApiMutation(api.qna.getAllAnswer);

const {mutate: getA} = useApiMutation(api.qna.searchUserAnswer);

const [answer, setAnswerData] = useState(null);
const [connect, setIsConnect] = useState(true);

        useEffect(()=>{
            
            getA({answer_id: props})
                  .then((question)=>{
                    setAnswerData(question);
                    console.log("Answer User",question)
                    
                  })
                  .catch((err)=>{
                    console.log("Error in question creation",err)
                    
                  })


            getAnswer({id: props})
                  .then((question)=>{
                    setData(question);
                    console.log("Bangya AAAAAAA",question)
                    
                  })
                  .catch((err)=>{
                    console.log("Error in question creation",err)
                    
                  })
           
        },[props,connect,handleNew])


        const {mutate: updateA} = useApiMutation(api.qna.updateLikeAnswer);

        const handleLike = async() =>{
            updateA({answer_id: props,
        })
            .then((question)=>{
             // setData(question);
              console.log("Like Done----------",question)
              
            })
            .catch((err)=>{
              console.log("Error in question creation",err)
              
            })
            .finally(()=>{
                setIsConnect((prev)=>(!prev))
                setDataRef(!dataRef)
                setDataRef2(!dataRef2)
            })
        }









    return (
        <Tilt
            transitionSpeed={500}
            tiltMaxAngleX={4}
            tiltMaxAngleY={2}
            scale={1.02}
            tiltReverse
            glareEnable
            glareBorderRadius="0.75rem"
            glareMaxOpacity={0.17}
        >
          {data && answer &&  <Card className="border border-input bg-transparent shadow-sm hover:text-accent-foreground">
                <CardHeader>
                    <CardTitle className="text-lg">
                    <Link
                            href={"/profile/" + data.user_id}
                            className="flex flex-row gap-3"
                        >
                            <div className="rounded-full overflow-clip h-10 w-10">
                                <Avatar className="h-10 w-10 rounded-full overflow-clip">
                                { /*<AvatarImage
                                       src={props.author.image}
                                       
                                    />*/}
                                    <AvatarFallback className="font-sans">
                                        {answer.name
                                            ?.charAt(0)
                                            .toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </div>

                            {answer.name}
                            <span className="pl-[30px]">Reputation Points : {answer.reputation}🪙 </span>
                        </Link>
                    </CardTitle>
                    <CardContent>{data.answer_detail}</CardContent>
                </CardHeader>
                <CardFooter className="text-sm text-gray-500">
                    {new Date(data._creationTime).toLocaleDateString(
                        navigator.language,
                        {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    ) + " , " +
                        new Date(data._creationTime).toLocaleTimeString(
                            navigator.language
                        )}

                        <div className="absolute right-[50px]">
                            <span className="cursor-pointer hover:text-red-700" onClick={handleLike}> Like </span>
                            {data.like} 
                        </div>
                </CardFooter>
            </Card>
}
        </Tilt>
    );
}
