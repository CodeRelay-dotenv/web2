"use client";
import { Comment } from "@/components/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatBubbleIcon, ReloadIcon } from "@radix-ui/react-icons";
import Error from "next/error";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import * as z from "zod";
import { useParams } from "next/navigation";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";



const fetcher = (url) =>
    fetch(url).then(async (res) => (await res.json()).question);

const formSchema = z.object({
    content: z
        .string()
        .min(4, {
            message: "Content must be at least 4 characters.",
        })
        .max(500, {
            message: "Content must be less than 500 characters.",
        }),
});

export default function PageSlug() {
    const { slug } = useParams();
    const router = useRouter();

    const { data, isLoading, error, mutate } = useSWR(
        `/api/questions/${slug}`,
        fetcher,
        {
            revalidateOnFocus: false, // Prevents refetching when the tab regains focus
        }
    );

    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const [submitting, setSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [quesData,setQuesData] = useState(null)
    const [ansData,setAnsData] = useState(null)
    const [handleNew,setHandleNew] = useState(false);
    const [first,setFirst] = useState(true)
    const [questionUser,setQuestionUser] = useState(null);
    const [dataRef,setDataRef] = useState(false)
    const [dataRef2,setDataRef2] = useState(false)



    const {mutate:getQuestion,isLoading2} = useApiMutation(api.qna.getSpecificQuestion);
    const {mutate:createAnswer,isLoading3} = useApiMutation(api.qna.createAnswer);
    const {mutate:getAllAnswer,isLoading4} = useApiMutation(api.qna.getAllAnswer);

    const {mutate:getUser,isLoading5} = useApiMutation(api.qna.searchUser);


    useEffect(()=>{
         
        getUser({question_id:slug})
              .then((question)=>{
                setQuestionUser(question)
                console.log("User Data----",question)
              })
              .catch(()=>{
                console.log("Error in question creation")
                
              })



        getQuestion({id: slug})
              .then((question)=>{
                setQuesData(question);
                console.log("Bangya Question",question)
                
              })
              .catch(()=>{
                console.log("Error in question creation")
                
              })
              .finally(()=>{
                setFirst(false);
              })
       


        
    },[first])


    
    useEffect(()=>{
        getAllAnswer({question_id:slug})
        .then((question)=>{
            setAnsData(question);
            console.log("Bangya Answer Array",question)
            
          })
          .catch(()=>{
            console.log("Error in question creation")
            
          })
    },[handleNew])


    useEffect(() => {
        if (!submitting) {
            form.reset({ content: "" });
            setIsOpen(false);
        }

    }, [submitting, form]);

    function onSubmit(values) {
        setSubmitting(true);
        createAnswer({answer_detail: values.content,
            question_id: slug,
          })
              .then((question)=>{
                console.log("Bangya Answer 2",question)
              })
              .catch(()=>{
                console.log("Error in question creation")
                
              })
            .finally(() => {setSubmitting(false)
                setHandleNew((prev)=>!prev);}
        );
    }
    

    // Default placeholder content
    const placeholderData = {
        title: "Placeholder Title",
        author: { name: "Anonymous", image: "" },
        content: "This is placeholder content for the question.",
        timestamp: new Date().toISOString(),
        answers: [],
    };

    useEffect(()=>{
        setFirst(true);
    },[dataRef])


    useEffect(()=>{
        console.log("ojajodjawdk")
        setHandleNew((prev)=>!prev)
    },[dataRef2])
    


    const displayData = data || placeholderData;

    return (
        <div className="container mt-10">
            <div className="flex flex-row">
                {isLoading2 ? (
                    <Skeleton className="w-full h-10"></Skeleton>
                ) : (
                    quesData && <h1 className="text-4xl">
                        <b>{quesData.title}</b>
                    </h1>
                )}
            </div>

            <div className="mt-6">
                <div className="flex flex-row gap-2 mt-13">
                    {isLoading ? (
                        <Skeleton className="inline w-20 h-10" />
                    ) : (
                        questionUser && quesData &&   <div>
                            <div className="rounded-full overflow-clip h-10 w-10">
                                <Avatar className="h-10 w-10 rounded-full overflow-clip">
                                    <AvatarImage
                                        src={displayData.author.image}
                                        alt={displayData.author.name}
                                    />
                                    <AvatarFallback className="font-sans">
                                    {questionUser.name
                                                ?.charAt(0)
                                                .toUpperCase()}
                                    
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <span className="text-md ">
                                {questionUser.name}
                            </span>
                            <span className="text-md pl-[150px] ">
                                Reputation Points : {questionUser.reputation}🪙
                            </span>
                                <div >
                                  Tag : {quesData.tag}
                                </div>
                            </div>
                    )}
                </div>
            </div>
            <div className="mt-2">
                <span className="text-sm text-gray-400">
                    {isLoading ? (
                        <Skeleton className="inline w-20 h-10" />
                    ) : (
                        quesData && ( new Date(quesData._creationTime).toLocaleString()
                        
                        )
                    )}
                </span>
            </div>
            <div className="mt-10">
                {isLoading ? (
                    <Skeleton className="w-auto h-36"></Skeleton>
                ) : (
                    quesData &&  <p className="text-lg">{quesData.question_detail}</p>
                )}
            </div>

            <div className="flex flex-col gap-2 mt-40">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <ChatBubbleIcon className="w-4 h-4 mr-2" />
                            Answer Question
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Answer</DialogTitle>
                            <DialogDescription>Be nice!</DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-2"
                            >
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Content</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Explain in detail..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button
                                        type="submit"
                                        className="mt-2"
                                        disabled={submitting}
                                    >
                                        {submitting && (
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        {submitting
                                            ? "Answering..."
                                            : "Answer"}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>

                {ansData && ansData.length > 0 ? (
                    ansData.map((a, index) => (
                        <Comment handleNew={handleNew} props={a} key={index} dataRef={dataRef} setDataRef={setDataRef}
                        dataRef2={dataRef2} setDataRef2={setDataRef2} />
                    ))
                ) : (
                    <Card>
                        <CardHeader>
                            No Answers Yet, Be the first!!!!!
                        </CardHeader>
                    </Card>
                )}
            </div>
        </div>
    );
}
