import imageLogin from '../../assets/image-login.svg'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const index = () => {
    return (
        <div className='flex max-h-[100vh] bg-[#F8F4F0]'>
            <div>
                <img className='max-h-full' src={imageLogin} alt="Description of image" />
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='bg-white w-[50%] h-[60%] rounded-lg shadow-lg p-8 flex flex-col gap-8'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <Label className='pb-2' htmlFor="email">Email</Label>
                            <Input type='email' placeholder="Email" />
                        </div>
                        <div>
                            <Label className='pb-2' htmlFor="password">Password</Label>
                            <Input type="password" placeholder="Password" />
                        </div>
                        <Button className='bg-black text-white mt-4' variant="outline">Login</Button>
                        <div className='flex flex-col items-center'>
                            <p>Need to create an account?
                                <a href="/signup" className='text-blue-500'> Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index