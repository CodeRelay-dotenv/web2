"use client";
import { QuestionCard } from "@/components/question-card";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWRInfinite from "swr/infinite";
import { useDebounce } from "use-debounce";
import * as z from "zod";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";






const fetcher = (url) =>
    fetch(url).then(async (res) => (await res.json()).questions);

const formSchema = z.object({
    title: z
        .string()
        .min(4, {
            message: "Title must be at least 4 characters.",
        })
        .max(80, { message: "Title must be less than 80 characters." }),

    content: z
        .string()
        .min(4, {
            message: "Content must be at least 4 characters.",
        })
        .max(500, {
            message: "Content must be less than 500 characters.",
        }),
        tag: z
        .string(),
        category: z
        .string()
        
});

export default function Question() {
    const router = useRouter();
    const { toast } = useToast();
    const [questionData,setQuestionData] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [searchDebounce] = useDebounce(searchName, 750);
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const [submitting, setSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [connect,setIsConnect] = useState(true);

    const {mutate:createQuestion,isLoading2} = useApiMutation(api.qna.createQuestion);
    const {mutate:searchQuestion,isLoading23} = useApiMutation(api.qna.searchQuestions);



    useEffect(() => {
        if (!submitting) {
            form.reset({ title: "", content: "" , tag:"",category:""});
            setIsOpen(false);
        }
    }, [submitting, form]);
    function onSubmit(values) {
        setSubmitting(true);
        createQuestion({title:values.title,
            question_detail:values.content,
            tag:values.tag,
            category:values.category
          })
              .then((question)=>{
                console.log("Bangya Question 2",question)
              })
              .catch(()=>{
                console.log("Error in question creation")
                
              })
              .finally(()=>{
              setSubmitting(false)
            setIsConnect(true)
            });
    }

    


    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null;

        const search= [];
        if (searchDebounce){
             
        }
       
    };

    const {mutate:createQ,isLoading} = useApiMutation(api.qna.getAllQuestion);


    useEffect(()=>{
        createQ({})
              .then((question)=>{
                setQuestionData(question);
                console.log("Bangya Question",question)
                
              })
              .catch(()=>{
                console.log("Error in question creation")
                
              })
              .finally(()=>{
                setIsConnect(false)
              })
    },[connect])


    const { data, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, { initialSize: 1 });

  
    return (
        <div className="container">
            <div className="grid grid-cols-1  gap-4 mt-10">
                <h2 className="text-3xl font-bold tracking-tight">Questions</h2>
                <span className="text-sm text-slate-400">
                    View and answer questions from peers.
                </span>
                <div className="flex flex-row w-full justify-between">
                    <Input
                        className="w-64"
                        placeholder="Search questions"
                        value={searchName}
                        onChange={(event) => setSearchName(event.target.value)}
                    />
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <PlusIcon className="w-4 h-4 mr-2" />
                                Ask Question
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Ask a question</DialogTitle>
                                <DialogDescription>
                                    What do you need help with?
                                </DialogDescription>
                            </DialogHeader>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-2"
                                >
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Post Title"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="content"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Question</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="What's your question?"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Category</FormLabel>
                                                <FormControl>
                                                    <Select {...field}>
                                                    <option value="">Select a tag</option>
                                                    <option value="ML">ML</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Artificial Intelligence">Artificial Intelligence (AI)</option>
                                                    <option value="Data Science">Data Science</option>
                                                    <option value="Cybersecurity">Cybersecurity</option>
                                                    <option value="Cloud Computing">Cloud Computing</option>
                                                    <option value="DevOps">DevOps</option>
                                                    <option value="Mobile App Development">Mobile App Development</option>
                                                    <option value="Blockchain">Blockchain</option>
                                                    <option value="Game Development">Game Development</option>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                            />
                                            <FormField
                                            control={form.control}
                                            name="tag"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Tag</FormLabel>
                                                <FormControl>
                                                    <Select {...field}>
                                                    <option value="">Select a tag</option>
                                                    <option value="study">Study</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="help">Help</option>
                                                    </Select>
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
                                                ? "Asking..."
                                                : "Ask question"}
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 mt-10">
                {isLoading ? (
                    [...Array(16)].map((_, index) => (
                        <Skeleton className="w-auto h-28" key={index} />
                    ))
                ) : questionData &&
                questionData.length > 0 &&
                (
                    <>
                        {questionData.map((page, pageIndex) =>
                           
                                <QuestionCard
                                    title={page.title}
                                    content={page.question_detail}
                                    id={page._id}
                                    key={`${page._id}`}
                                    tag={page.tag}
                                ></QuestionCard>
                            )
                        }
                        <Button
                            onClick={() => setSize(size + 1)}
                            disabled={isLoading || isValidating}
                        >
                            {(isLoading || isValidating) && (
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Load More
                        </Button>
                    </>
                ) }
            </div>
        </div>
    );
}