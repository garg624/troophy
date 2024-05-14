"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PencilIcon, Save } from 'lucide-react'
const AwardEditModal = ({awardData}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button title="Edit Award Details" className='btn btn-warning text-white'>
            <PencilIcon />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Award Data</DialogTitle>
            <DialogDescription>
              Make Changes to Award-
              <span className='text-amber-500 underline cursor-not-allowed'>
              "{awardData.publicId}".
              </span>
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={awardData.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                defaultValue={awardData.price}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select id="category">
                <SelectTrigger className="w-[270px]">
                  <SelectValue placeholder="Select Award Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="trophy">Trophy</SelectItem>
                    <SelectItem value="medal">Medal</SelectItem>
                    <SelectItem value="badge">Badge</SelectItem>
                    <SelectItem value="plate">Plate</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Product ID
              </Label>
              <Input defaultValue={awardData._id} disabled className="user-select-none w-[230px]"/>
            </div>
          <DialogFooter>
            <button className='btn btn-success text-white'>
              <Save />
              Save changes
            </button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AwardEditModal