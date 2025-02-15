import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

export function QuestionCard(props) {
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
            <Link href={"/questions/" + props.id}>
                <Card className="border border-input bg-transparent shadow-sm hover:text-accent-foreground">
                    <CardHeader>
                        <CardTitle>
                            {props.title}
                            <ChevronRightIcon className="ml-auto h-6 w-6" />
                            Tag - {props.tag}
                            <div className="ml-auto h-6 w-6" />
                            Category - {props.category}
                        </CardTitle>
                        <CardDescription>{props.content}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </Tilt>
    );
}
