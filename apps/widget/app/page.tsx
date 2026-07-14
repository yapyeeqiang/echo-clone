"use client"

import { Input } from "@workspace/ui/components/input"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const [name, setName] = useState("")
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  const handleClick = () => {
    addUser({
      name: name
    })
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Hello apps/widget</h1>
          
          <div>
            {users?.map(user => (
              <p key={user._id}>{user.name}</p>
            ))}
          </div>

          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={handleClick}>Add</Button>
        </div>
      </div>
    </div>
  )
}
