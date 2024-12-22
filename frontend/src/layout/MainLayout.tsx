import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const isMobile = false;
  return (
    <div className='h-screen bg-black text-white flex flex-col'>
      <ResizablePanelGroup>
        {/* Left Sidebar component */}
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>

        </ResizablePanel>

        {/* Main content */}
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
            <Outlet />
        </ResizablePanel>

        {/* Right Sidebar component */}
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>

        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout
