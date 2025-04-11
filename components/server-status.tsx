import { Badge } from "@/components/ui/badge"
import { Server } from "lucide-react"

export default function ServerStatus() {
  return (
    <Badge variant="outline" className="flex items-center gap-1 bg-green-50 text-green-700 border-green-200">
      <Server className="h-3 w-3" />
      <span>Node.js Server Running</span>
    </Badge>
  )
}
