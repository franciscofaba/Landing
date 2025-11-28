import { Play } from "lucide-react";

function Video() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl mx-auto">
        <div className="group relative aspect-video bg-neutral-100 rounded-xl overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-neutral-50 group-hover:bg-neutral-100 transition-colors duration-500">
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out">
              <Play 
                className="w-8 h-8 md:w-10 md:h-10 text-neutral-900 fill-neutral-900 ml-1 opacity-90 group-hover:opacity-100" 
                strokeWidth={0} 
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-200">
             <div className="h-full w-1/3 bg-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-start text-neutral-400 font-sans text-sm tracking-wide">
            <p>Manifesto 2024</p>
            <p>01:24</p>
        </div>

      </div>
    </div>
  );
}

export default Video;