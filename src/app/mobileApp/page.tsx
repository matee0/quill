import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import UpgradeButton from "@/components/UpgradeButton"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PLANS } from "@/config/stripe"
import { cn } from "@/lib/utils"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react"
import Link from "next/link"

const Page = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">
            We are also experts for Mobile Apps
          </h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Whether you&apos;re just trying out our service or need more,
            we&apos;ve got you covered.
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Page
