import { LucideIcon } from "lucide-react"

export type CardProps = {
    title: string,
    flash: {icon: string, text: string, bg: string},
    icon: {icon: string, bg: string}
}

export type HowItWorkProps = {
    title: string,
    icon: {icon: LucideIcon, bg: string}
}

export type TestiCardProps = {
    name: string,
    job: string,
    stars: number,
    comment: string
}


export interface WhyUsCardProps {
    title: string;
    icon: {
        icon: string,
        bg: string
    };
    description: string;
}

export type TQuestion = {
    question: string;
    answer: string;
}

export type TCategory = {
    icon: string;
    title: string;
    questions: TQuestion[]
}