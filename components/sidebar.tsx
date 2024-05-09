import { cn } from "@/lib/utils";
import Image from 'next/image'
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
}

export const Sidebar = ({ className}: Props) => {
  return (
    <div className={cn(`flex h-full lg:w-[256px] lg:fixed left-0 top-0 
      px-4 border-r-2 flex-col`, className)}>
      <Link href={'/learn'}>
        <div className="pt-8 pol-4 pb-7 flex items-center gap-x-3">
          <Image src={'/mascot.svg'} height={40} width={40} alt="mascot"/>
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" iconSrc="/learn.svg" href="/learn"/>
        <SidebarItem label="leaderboard" iconSrc="/leaderboard.svg" href="/leaderboard"/>
        <SidebarItem label="quests" iconSrc="/quests.svg" href="/quests"/>
        <SidebarItem label="shop" iconSrc="/shop.svg" href="/shop"/>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin text-muted-foreground"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
      </div>
    </div>
  )
}