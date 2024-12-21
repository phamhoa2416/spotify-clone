import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { axiosInstance } from "@/lib/axios"
import { useUser } from "@clerk/clerk-react"
import { LoaderCircle } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthCallbackPage = () => {
  const {isLoaded, user} = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    const syncUser = async () => {
      try {
        if (!isLoaded || !user) return;
        await axiosInstance.post("/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl
        })
      } catch (error) {
        console.log("Error in auth callback", error)
      } finally {
        navigate("/", )
      }
    };

    syncUser();
  }, [isLoaded, user, navigate])
  
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle> Đang tải </CardTitle>
          <CardDescription> Đang xử lý yêu cầu của bạn </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 pt-6"> 
          <LoaderCircle className="size-6 text-purple-600 animate-spin" />
          <h3 className="text-zinc-400 text-xl font-bold"> Đang đăng nhập </h3>
          <p className="text-zinc-400 text-sm"> Vui lòng chờ trong giây lát </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthCallbackPage
