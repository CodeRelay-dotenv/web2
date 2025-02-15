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

export function Comment({ props }) {
    const {mutate:getAnswer,isLoading4} = useApiMutation(api.qna.getSpecificAnswer);
const [data,setData] = useState(null);

const {mutate: createA} = useApiMutation(api.qna.getAllAnswer);

const [answer, setAnswerData] = useState(null);
const [connect, setIsConnect] = useState(true);

        useEffect(()=>{
            console.log("prop data",typeof(props))
            getAnswer({id: props})
                  .then((question)=>{
                    setData(question);
                    console.log("Bangya AAAAAAA",question)
                    
                  })
                  .catch((err)=>{
                    console.log("Error in question creation",err)
                    
                  })
           
        },[props])


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
          {data &&  <Card className="border border-input bg-transparent shadow-sm hover:text-accent-foreground">
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
                                        {/*props.author.name
                                            ?.charAt(0)
                                            .toUpperCase()*/}
                                    </AvatarFallback>
                                </Avatar>
                            </div>

                           Dummy
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
                    ) + " " +
                        new Date(data._creationTime).toLocaleTimeString(
                            navigator.language
                        )}
                </CardFooter>
            </Card>
}
        </Tilt>
    );
}
