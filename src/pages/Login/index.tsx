import imageLogin from '../../assets/image-login.svg'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Index = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-1/3 bg-green-500 hidden md:block'>
                <img className='h-full w-full object-cover' src={imageLogin} alt="Description of image" />
            </div>

            <div className='w-2/3 flex justify-center items-center'>
                <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                    <h1 className='text-2xl font-bold mb-4'>Login</h1>
                    <form className='space-y-4'>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Digite seu email" />
                        </div>
                        <div>
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" placeholder="Digite sua senha" />
                        </div>
                        <Button type="submit" className='w-full'>Entrar</Button>
                        <div className='text-center mt-4'>
                            <p>Need to create an account?
                                <a href="/signup" className='text-blue-500'> Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index
