import { add } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Hello apps/widget</h1>
          <p>3 + 3 = {add(3, 3)}</p>

          <Input />
        </div>
      </div>
    </div>
  )
}
