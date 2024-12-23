import PlaylistSkeleton from '@/components/skeletons/PlaylistSkeleton'
import { buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { SignedIn } from '@clerk/clerk-react'
import { HomeIcon, Library, ListMusicIcon, MessageCircle, SearchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMusicStore } from '@/stores/useMusicStore'
import { useEffect } from 'react'

const Sidebar = () => {

  const {songs, albums, fetchAlbums, isLoading} = useMusicStore()  

  useEffect(() => {
    fetchAlbums()
  }, [fetchAlbums])

  console.log({albums})
  
  return (
    <div className='h-full flex flex-col gap-2'>
        <div className='rounded-lg bg-zinc-900 p-4'>
            <div className='space-y-2'>
                <Link
                    to={"/"}
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            className: "w-full justify-start text-white hover:bg-zinc-800"
                        })
                    )}
                >
                    <HomeIcon className='mr-2 size-5' />
                    <span className='hidden md:inline'>Trang chủ</span>    
                </Link> 

                <Link
                    to={"/search"}
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            className: "w-full justify-start text-white hover:bg-zinc-800"
                        })
                    )}
                >
                    <SearchIcon className='mr-2 size-5' />
                    <span className='hidden md:inline'>Tìm kiếm</span>    
                </Link> 

                <Link
                    to={"/playlist"}
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            className: "w-full justify-start text-white hover:bg-zinc-800"
                        })
                    )}
                >
                    <ListMusicIcon className='mr-2 size-8' />
                    <span className='hidden md:inline'>Thư viện</span>    
                </Link> 

                <SignedIn>
                    <Link
                        to={"/messages"}
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                                className: "w-full justify-start text-white hover:bg-zinc-800"
                            })
                        )}
                    >
                        <MessageCircle className='mr-2 size-8' />
                        <span className='hidden md:inline'>Trò chuyện</span>    
                    </Link> 
                </SignedIn>
            </div>
        </div>

        <div className='flex-1 rounded-lg bg-zinc-900 p-4'>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center text-white px-2'> 
                    <Library className='mr-2 size -8' />
                    <span className='hidden md:inline'>Thư viện của bạn</span>
                </div>
            </div>

            <ScrollArea className='h-[calc(100vh-300px)]'>
                <div className='space-y-2'>
                    {isLoading ? (
                        <PlaylistSkeleton />
                    ) : (
                        "Some music"
                    )}
                </div>
            </ScrollArea>
        </div>

    </div>
  )
}

export default Sidebar
