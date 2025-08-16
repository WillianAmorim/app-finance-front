import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const Index = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='flex flex-col h-screen bg-gray-100'>
            <div className='bg-black p-4 rounded-b-xl '>
                <h1 className='text-white text-center'>Finance</h1>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="p-6 rounded-lg shadow-lg w-80 bg-white">
                    <h1 className="text-black pb-4 text-xl font-semibold">Login</h1>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-2'>
                            <Label>Email</Label>
                            <Input className='' type="email" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Password</Label>
                            <div className='border border-gray-300 rounded-md flex items-center bg-white'>
                                <Input className=" border-none" type={showPassword ? "text" : "password"} />
                                <div onClick={() => setShowPassword(!showPassword)} className=" px-2">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </div>
                            </div>
                        </div>
                        <Button className="mt-4 w-full">Login</Button>
                    </div>
                    <p className='pt-8 text-gray-500'>Need to create an account ? <a href="/register" className="text-black underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Index
