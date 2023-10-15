import { Skeleton } from "@/components/ui/skeleton"

export const Loader = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-full h-4" />
    </div>
  )
}