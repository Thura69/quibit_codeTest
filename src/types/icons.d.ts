import { LucideProps } from "lucide-react";

export interface IconsType {
    add: (props: LucideProps) => JSX.Element;
    menu: (props: LucideProps) => JSX.Element;
    global: (props: LucideProps) => JSX.Element;
    network: (props: LucideProps) => JSX.Element;
    hanaNetwork: (props: LucideProps) => JSX.Element;
    chevronRight: (props: LucideProps) => JSX.Element;
    chevronLeft: (props: LucideProps) => JSX.Element;
    play: (props: LucideProps) => JSX.Element;
    stop: (props: LucideProps) => JSX.Element;
}