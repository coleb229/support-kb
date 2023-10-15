'use client'
import { addUserGuide } from "@/lib/actions"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Walkthrough } from "../articleComponents/Walkthrough"
import { UseCases } from "../articleComponents/UseCases"
import { useState } from "react"

export default function UserGuidesBuilder() {
  const { pending } = useFormStatus()
  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState('')
  const [uses, setUses] = useState('')

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger  className="my-6 p-6 border-[1px] border-black hover:bg-black hover:text-white hover:rounded-2xl ease-in duration-200 font-bold">Add Guide +</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a guide using the form below</DialogTitle>
            <DialogDescription>
              <PreviewWindow title={title} steps={steps} uses={uses} />
              <form action={addUserGuide} className="flex flex-col text-xs">
                <label htmlFor="title">Title</label>
                <Input 
                  name="title" 
                  id="title" 
                  value={title}
                  onChange={(e:any) => setTitle(e.target.value)}
                />
                <label htmlFor="steps">Troubleshooting Steps</label>
                <Textarea 
                  name="steps" 
                  id="steps" 
                  value={steps}
                  onChange={(e:any) => setSteps(e.target.value)}
                />
                <label htmlFor="uses">Use Cases</label>
                <Textarea 
                  name="uses" 
                  id="uses" 
                  value={uses}
                  onChange={(e:any) => setUses(e.target.value)}
                />
                <button type="submit" disabled={pending} className="bg-green-300 w-1/6 rounded-2xl mx-auto my-2 py-2 hover:bg-green-200">{pending ? 'Submitting...' : 'Submit'}</button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const PreviewWindow = ({title, steps, uses}:any) => {
  steps = steps.split('\n').map((step: string) => step.trim())
  uses = uses.split('\n').map((use: string) => use.trim())

  return (
    <div className="p-6 bg-slate-200 rounded-lg w-full box shadow-xl">
      <h1>{title}</h1>
      <div className="flex">
        <Walkthrough steps={steps} />
        {uses.length > 0 ? <UseCases list={uses} /> : null}
      </div>
    </div>
  )
}