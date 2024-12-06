import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const updateAPIToken = (token: string | null) => {
    if (token) axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else delete axiosInstance.defaults.headers.common["Authorization"];
};
const AuthProvider = ({ children }: { children: React.ReactElement }) => {
    const  {getToken, userId } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                updateAPIToken(token);
            } catch (error: any) {
                updateAPIToken(null);
                console.log("Error in auth provider: ", error);
            } finally {
                setLoading(false);
            }
        };

        initAuth();

    }, [getToken, userId]);

    if (loading) return (
        <div className='h-screen, w-full, flex, items-center, justify-center'>
            <LoaderCircle className='size-8, text-purple-500, animate-spin'/>
        </div>
    );

  return <>{children}</>;
}

export default AuthProvider;