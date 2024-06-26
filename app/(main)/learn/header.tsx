import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Props = {
  title: string
}

export const Header = ({title}: Props) => {
  return (
    <div className="sticky top-0 mb-5 bg-white lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between
    border-b-2 text-neutral-400 lg:z-50">
      <Link href={'/courses'}>
        <Button variant='ghost' size='sm'>
          <ArrowLeft className="w-5 h-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">
        {title}
      </h1>
      <div />
    </div>
  )
}