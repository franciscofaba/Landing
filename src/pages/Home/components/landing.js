import { Apple, Play, Search, CheckCircle2, Triangle } from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen  font-sans text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
   

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 pt-10 md:pt-0 mb-16 md:mb-0 space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Design Your <br />
            Perfect Day.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed">
            Get the best of health and fitness, all in one place. Download the app today!
          </p>

     
        </div>

        {/* RIGHT CONTENT (PHONE MOCKUP) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            
          {/* Sombra dramática detrás del teléfono (como en la imagen original) */}
          <div className="absolute top-10 right-0 w-[80%] h-[90%] bg-slate-200/50 rounded-full blur-[60px] -z-10 transform translate-x-10" />

          {/* EL TELÉFONO */}
          <div className="relative w-[320px] h-[680px] bg-white rounded-[50px] border-[12px] border-slate-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-2xl z-30"></div>
            
            {/* Botones físicos laterales */}
            <div className="absolute top-24 -left-[15px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-36 -left-[15px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-28 -right-[15px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

            {/* Pantalla */}
            <div className="w-full h-full bg-slate-50 pt-12 pb-20 px-4 overflow-y-auto no-scrollbar flex flex-col gap-4">
               
               {/* Card 1: Exercise */}
               <AppCard 
                 title="Exercise" 
                 bgImage="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
               />

               {/* Card 2: Sleep */}
               <AppCard 
                 title="Sleep" 
                 bgImage="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
               />

               {/* Card 3: Focus */}
               <AppCard 
                 title="Music for focus" 
                 bgImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop"
               />

               {/* Card 4: Meditation */}
               <AppCard 
                 title="Meditation" 
                 bgImage="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1976&auto=format&fit=crop"
                 textColor="text-slate-800"
               />
            </div>

            {/* Bottom Nav App */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-t border-slate-100 flex items-start justify-around pt-4 pb-2 z-20">
               <NavItem icon={Triangle} label="Today" active />
               <NavItem icon={Search} label="Explore" />
               <NavItem icon={CheckCircle2} label="Activity" />
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-30"></div>

          </div>
        </div>

      </main>
    </div>
  );
}

// --- SUBCOMPONENTES ---

function AppCard({ title, bgImage, textColor = "text-white" }) {
    return (
        <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm shrink-0 group cursor-pointer">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${textColor}`}>
                {title}
            </div>
        </div>
    )
}

function NavItem({ icon: Icon, label, active }) {
    return (
        <div className={`flex flex-col items-center gap-1 ${active ? 'text-slate-800' : 'text-slate-400'}`}>
            <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{label}</span>
        </div>
    )
}

function StoreButton({ type }) {
    const isApple = type === 'apple';
    const Icon = isApple ? Apple : Play;
    const text1 = isApple ? 'Download on the' : 'GET IT ON';
    const text2 = isApple ? 'App Store' : 'Google Play';

    return (
        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-slate-200">
            <Icon className={`fill-current ${isApple ? 'w-8 h-8' : 'w-7 h-7'}`} strokeWidth={0} />
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium tracking-wide opacity-80">{text1}</span>
                <span className="text-lg font-bold font-sans">{text2}</span>
            </div>
        </button>
    )
}

export default LandingPage;