import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/theme-toggle";

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Star } from "lucide-react";


// what projects will be display into the nav bar on hover
// max 6 items
const projects: { title: string; to: string; description: string }[] = [
    {
        title: "DUCS App",
        to: "/projects/ducs-app",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "This Website",
        to: "/projects/ducs-website",
        description:
            "How we made this website and why its so cool",
    },
    // {
    //     title: "Filler",
    //     to: "/",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi animi sequi!",
    // },
    // {
    //     title: "Filler",
    //     to: "/",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi animi sequi!",
    // },
    // {
    //     title: "Filler",
    //     to: "/",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi animi sequi!",
    // },
    // {
    //     title: "Filler",
    //     to: "/",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi animi sequi!",
    // },
]

export function NavigationMenuDropdown() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavAbout />
                <NavProjects />
                <NavContributers />
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function NavAbout() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>DUCS</NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                        <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                        >
                            <div className="mb-2 mt-4 text-lg font-medium">
                                Deakin University Computer Society
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                The home of DUCS!
                                What we do, who we are and everything anyone can join in on.
                            </p>
                        </Link>
                    </div>
                    <LinkItem to="/about" title="About Us">
                        What we do as a DUSA club
                    </LinkItem>
                    <LinkItem to="/join" title="Join!">
                        Join the DU Computer Society
                    </LinkItem>
                    <p className="text-xs text-secondary col-span-2">Thank you to all our members!</p>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )

}

function NavProjects() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {projects.map((component, index) => (
                        <LinkItem
                            key={index}
                            title={component.title}
                            to={component.to}
                        >
                            {component.description}
                        </LinkItem>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

function NavContributers() {
    return (
        <NavigationMenuItem>
            <Link to="/contributors">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contributors
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}

interface ListItemProps {
    className?: string,
    title: string,
    children: React.ReactNode,
    to: string,
}

function LinkItem({ className, title, children, to, ...props }: ListItemProps) {
    return (
        <div>
            <Link
                to={to}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </div>
    )
}


export function NavBar() {
    return (
        <div className="sticky top-0 left-0 w-full border-b border-input p-1 px-4 flex flex-row gap-4 bg-background">
            <Link to="/" className="my-auto gap-4 py-1">
                {/* DUCS Logo to go here */}
                <Star size={56} />
            </Link>
            <NavigationMenuDropdown />
            <span className="ml-auto">
                <ModeToggle />
            </span>
        </div>
    )
}