import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const MainLayout = () => {
    const isMobile = false;
  return (
    <div className='h-screen bg-black text-white flex flex-col'>
      <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">
        {/* Left Sidebar component */}
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
            <Sidebar />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* Main content */}
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
            <Outlet />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* Right Sidebar component */}
        <ResizablePanel defaultSize={20} minSize={0} maxSize={30} collapsedSize={0}>
            Right sidebar
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout
