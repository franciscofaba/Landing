import React, { useState } from "react";
import {
  Calendar,
  Bell,
  Phone,
  Mic,
  Image as ImageIcon,
  FileText,
  XCircle,
  Users,
  UserPlus,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

// ==========================================
// DATA: EJEMPLOS REALES Y FLUJOS EDUCATIVOS
// ==========================================

const categories = [
  {
    id: "reminders",
    title: "Crear Recordatorios",
    icon: Bell,
    description: "Harold es flexible: crea, edita, renombra o elimina recordatorios al instante. Maneja fechas relativas y específicas.",
    instruction: "Escribe: 'Recuérdame [acción] [fecha/hora]'.",
    
    // 6 EJEMPLOS RÁPIDOS
    quickExamples: [
      {
        title: "Relativo",
        user: "Recuérdame en 20 minutos sacar la pizza 🍕",
        bot: "Ok, creado para hoy a las 20:45. \n¿Quieres que también te llame?"
      },
      {
        title: "Fecha Específica",
        user: "Recordatorio pagar luz el 5 de nov a las 10am",
        bot: "Ok, está todo listo, he creado tu recordatorio para 11/05 a las 10:00."
      },
      {
        title: "Ver Lista",
        user: "Muéstrame mis recordatorios",
        bot: "Aquí tienes tus pendientes:\n1. Pizza (20:45)\n2. Pagar Luz (05/11 10:00)"
      },
      {
        title: "Recurrencia",
        user: "Recuérdame tomar pastilla todos los días a las 9pm",
        bot: "Ok, creado recordatorio recurrente (DAILY) para las 21:00."
      },
      {
        title: "Editar Hora",
        user: "Mueve el recordatorio de la pizza a las 9pm",
        bot: "Hecho. Recordatorio actualizado a las 21:00."
      },
      {
        title: "Eliminar",
        user: "Borra el recordatorio de la luz",
        bot: "Entendido. He eliminado ese recordatorio."
      }
    ],

    // 5 FLUJOS COMPLETOS
    flows: [
      {
        title: "Pack Completo (Calendar + Llamada)",
        messages: [
          { role: "user", text: "Recuérdame mañana a las 3pm dentista" },
          { role: "bot", text: "Ok, recordatorio creado para mañana 15:00.\nSi quieres que además te llame, lo agendemos en el calendar o ambos..." },
          { role: "user", text: "Haz ambas cosas" },
          { role: "bot", text: "Ok, listo: agregué la llamada y también lo agendé en el calendar. ✅" }
        ]
      },
      {
        title: "Gestión Total: Editar",
        messages: [
          { role: "user", text: "Recuérdame reunión a las 4" },
          { role: "bot", text: "Ok, creado para las 16:00." },
          { role: "user", text: "Cámbialo a las 5 y ponle 'Reunión Cliente'" },
          { role: "bot", text: "Actualizado: Ahora es 'Reunión Cliente' a las 17:00." }
        ]
      },
      {
        title: "Borrar por error",
        messages: [
          { role: "user", text: "Recuérdame comprar pan" },
          { role: "bot", text: "Ok, creado para las 19:00." },
          { role: "user", text: "Ya lo compré, bórralo" },
          { role: "bot", text: "Listo, recordatorio eliminado. 🗑️" }
        ]
      },
      {
        title: "Convertir a Llamada",
        messages: [
          { role: "user", text: "Recuérdame en 1 hora salir urgente" },
          { role: "bot", text: "Ok, creado para hoy a las 18:30.\n¿Necesitas llamada o calendar?" },
          { role: "user", text: "Sí, llámame porfa" },
          { role: "bot", text: "Ok, listo: agregué la llamada asociada a tu recordatorio. 📞" }
        ]
      },
      {
        title: "Flujo con 'Calendar'",
        messages: [
          { role: "user", text: "Recuérdame mañana a las 3pm dentista" },
          { role: "bot", text: "Ok, recordatorio creado para mañana 15:00.\nSi quieres que además te llame, lo agendemos en el calendar o ambos..." },
          { role: "user", text: "Agéndalo en el calendar" },
          { role: "bot", text: "Ok, listo: lo agendé en el calendar." }
        ]
      }
    ]
  },
  {
    id: "calls",
    title: "Hacer Llamadas",
    icon: Phone,
    description: "Programa llamadas reales. Si tus planes cambian, puedes reprogramarlas o cancelarlas simplemente diciéndolo.",
    instruction: "Di: 'Llámame [fecha] [hora]'.",
    
    // 6 EJEMPLOS RÁPIDOS
    quickExamples: [
      {
        title: "Despertador",
        user: "Despiértame mañana a las 7am con una llamada",
        bot: "Ok, te llamaremos en la fecha y hora agendada (Mañana 07:00)."
      },
      {
        title: "Ver Cola",
        user: "Muéstrame mis llamadas",
        bot: "Tienes programadas:\n1. Despertador (07:00)\n2. Rescate (15:00)"
      },
      {
        title: "Escape",
        user: "Llámame en 5 minutos, necesito una excusa",
        bot: "Ok, programando llamada a tu celular en 5 minutos."
      },
      {
        title: "Urgencia",
        user: "Llámame YA",
        bot: "Iniciando llamada ahora mismo... 📞"
      },
      {
        title: "Reprogramar",
        user: "Pasa la llamada de las 7 a las 8:30",
        bot: "Listo. Llamada movida a las 08:30."
      },
      {
        title: "Cancelar",
        user: "Cancela la llamada de hoy",
        bot: "Ok, llamada cancelada."
      }
    ],

    // 4 FLUJOS
    flows: [
      {
        title: "Ambigüedad (Múltiples llamadas)",
        messages: [
          { role: "user", text: "Cancela la llamada de hoy" },
          { role: "bot", text: "Tienes 2 llamadas hoy: 'Despertador' a las 7:00 y 'Cliente' a las 17:00. ¿Cuál quieres eliminar?" },
          { role: "user", text: "La del cliente" },
          { role: "bot", text: "Entendido. Llamada 'Cliente' de las 17:00 cancelada." }
        ]
      },
      {
        title: "Cambio de Planes (Por Nombre)",
        messages: [
          { role: "user", text: "Mueve la llamada 'Despertador' para las 8" },
          { role: "bot", text: "Listo. He reprogramado tu llamada 'Despertador' para las 08:00." }
        ]
      },
      {
        title: "Cancelar Llamada Rápida",
        messages: [
          { role: "user", text: "Llámame en 5 minutos para escapar" },
          { role: "bot", text: "Ok, programando llamada en 5 minutos." },
          { role: "user", text: "Ya no hace falta, cancélala" },
          { role: "bot", text: "Ok, llamada de rescate cancelada. 👍" }
        ]
      },
      {
        title: "Llamada + Mensaje",
        messages: [
          { role: "user", text: "Quiero que me llames el viernes a las 9am para recordar los pasajes" },
          { role: "bot", text: "Ok, te llamaremos en la fecha y hora agendada.\nTambién te enviaré un WhatsApp en ese momento." }
        ]
      }
    ]
  },
  {
    id: "calendar",
    title: "Google Calendar",
    icon: Calendar,
    description: "Sincronización bidireccional. Harold gestiona eventos y verifica disponibilidad.",
    instruction: "Di: 'Agenda [título] [fecha] [hora]'.",
    warning: "Si quieres agendar con otra persona, primero debes crear el contacto con Harold (ver sección Contactos más abajo).",
    
    quickExamples: [
      {
        title: "Agenda Simple",
        user: "Agenda reunión con Marcos mañana a las 10",
        bot: "📅 Agendé “Reunión con Marcos” en tu Google Calendar."
      },
      {
        title: "Disponibilidad",
        user: "¿Qué tengo para hoy?",
        bot: "Hoy tienes 2 eventos:\n1. Daily Meeting (10:00)\n2. Almuerzo con mamá (13:00)"
      },
      {
        title: "Solo yo",
        user: "Agenda bloque de concentración el viernes a las 9am, solo yo",
        bot: "📅 Agendé “Bloque de concentración” en tu Google Calendar sin invitados."
      }
    ],

    flows: [
      {
        title: "Primera vez (Auth)",
        messages: [
          { role: "user", text: "Conectar mi calendario" },
          { role: "bot", text: "⚠️ Para agendar en tu Google Calendar necesito permiso. Toca este enlace para conectar:\n[Link Seguro de Google]" },
          { role: "bot", text: "¡Conectado exitosamente! Ahora puedo leer y escribir en tu agenda." }
        ]
      },
      {
        title: "Reunión con Invitados",
        messages: [
          { role: "user", text: "Agenda reunión de presupuesto con Ana el lunes a las 11" },
          { role: "bot", text: "ℹ️ No encontré correo para “Ana”.\nAgendaré la reunión sin invitado por ahora." },
          { role: "user", text: "El correo es ana@empresa.com, agrégalo" },
          { role: "bot", text: "Ok, actualizado. He enviado la invitación a ana@empresa.com." }
        ]
      },
      {
        title: "Conflicto / Reprogramar",
        messages: [
          { role: "user", text: "Agenda cita a las 4pm hoy" },
          { role: "bot", text: "📅 Agendé “Cita” en tu Google Calendar." },
          { role: "user", text: "Mejor muévela a las 5pm" },
          { role: "bot", text: "Evento actualizado: Cita hoy a las 17:00." }
        ]
      }
    ]
  },
  {
    id: "audios",
    title: "Audios y Resúmenes",
    icon: Mic,
    description: "Harold transcribe tus notas de voz y resume textos largos o reenvíos.",
    instruction: "Envía un audio o reenvía un texto largo.",

    quickExamples: [
      {
        title: "Nota de Voz",
        user: "🎤 [Audio: 'Acuérdame comprar leche']",
        bot: "He guardado tu nota: 'Comprar leche'. ¿Quieres hacerlo un recordatorio?"
      },
      {
        title: "Resumen Express",
        user: "Resume esto: [Texto largo de email...]",
        bot: "Resumen:\n1. El cliente aprobó el ppt.\n2. Necesitan factura hoy."
      },
      {
        title: "Lista desde Audio",
        user: "🎤 [Audio dictando compras]",
        bot: "He creado la lista 'Compras' con: Pan, Huevos, Jamón."
      }
    ],

    flows: [
      {
        title: "Audio a Acción",
        messages: [
          { role: "user", text: "🎤 [Audio: 'Oye Harold agenda reunión con el equipo mañana a las 10']" },
          { role: "bot", text: "Entendido. Agendando reunión 'Con el equipo' para mañana 10:00 AM. ¿Invito a alguien?" },
          { role: "user", text: "No, así está bien" },
          { role: "bot", text: "📅 Agendé “Reunión con el equipo” en tu Google Calendar." }
        ]
      },
      {
        title: "Resumen de Chat",
        messages: [
          { role: "user", text: "[Reenvío de mensaje largo de WhatsApp]" },
          { role: "bot", text: "¿Quieres que haga algo con ese mensaje o solo querías compartirlo?" },
          { role: "user", text: "Hazme un resumen" },
          { role: "bot", text: "El resumen es el siguiente..." },
        ]
      },
      {
        title: "Ideas sueltas",
        messages: [
          { role: "user", text: "🎤 [Audio divagando sobre una idea de negocio]" },
          { role: "bot", text: "He transcrito tu idea. Aquí los puntos clave:\n- Venta de calcetines online.\n- Suscripción mensual.\n¿Guardo esto en una nota?" }
        ]
      }
    ]
  },
  {
    id: "images",
    title: "Enviar Imágenes",
    icon: ImageIcon,
    description: "Sube fotos de facturas, pizarras o productos. Harold extrae la información útil.",
    instruction: "Envía una foto sola o con comentario.",

    quickExamples: [
      {
        title: "Lista de Foto",
        user: "📷 [Foto de receta]",
        bot: "Ok, he creado tu lista 'Ingredientes' con los elementos de la imagen."
      },
      {
        title: "Gasto",
        user: "📷 [Foto de boleta]",
        bot: "Gasto detectado: $12.500 en Farmacia. ¿Lo agrego a tu reporte?"
      },
      {
        title: "Contexto",
        user: "📷 [Foto de flyer de evento]",
        bot: "Veo un evento 'Jazz Night' el sábado a las 20:00. ¿Lo agendo?"
      }
    ],

    flows: [
      {
        title: "OCR a Lista",
        messages: [
          { role: "user", text: "Crea una lista con lo de esta foto" },
          { role: "bot", text: "Por favor, envíame la foto con los elementos." },
          { role: "user", text: "📷 [Foto pizarra con tareas]" },
          { role: "bot", text: "Ok, he creado tu lista 'Pizarra' con: \n- Llamar proveedores\n- Revisar stock\n- Limpieza" }
        ]
      },
      {
        title: "Recordatorio Visual",
        messages: [
          { role: "user", text: "Recuérdame esto mañana" },
          { role: "bot", text: "¿Podrías indicarme el motivo o enviar la foto?" },
          { role: "user", text: "📷 [Foto de medicamento]" },
          { role: "bot", text: "Ok, creado recordatorio 'Medicamento' para mañana a las 09:00." }
        ]
      },
      {
        title: "Análisis de Texto",
        messages: [
          { role: "user", text: "¿Qué dice aquí?" },
          { role: "user", text: "📷 [Foto de carta en inglés]" },
          { role: "bot", text: "Es una carta del banco. Dice que tu tarjeta ha sido renovada y llegará en 5 días." }
        ]
      }
    ]
  },
  
  // --- CONTACTOS ---
  {
    id: "contacts",
    title: "Crear Contactos",
    icon: UserPlus, 
    description: "Guarda nombres y correos de personas frecuentes para enviarles invitaciones de calendario automáticamente.",
    instruction: "Di: 'Agrega contacto [nombre] [correo]'.",

    quickExamples: [
      {
        title: "Crear Rápido",
        user: "Agrega contacto Juan juan@gmail.com",
        bot: "Ok, tu contacto ha sido creado."
      },
      {
        title: "Ver Contactos",
        user: "Mostrar contactos",
        bot: "Tus contactos:\n1. Juan (juan@gmail.com)\n2. Ana (ana@empresa.com)"
      },
      {
        title: "Uso en Agenda",
        user: "Agenda con Juan mañana",
        bot: "Ok. Enviaré invitación a juan@gmail.com."
      }
    ],

    flows: [
      {
        title: "Creación Guiada",
        messages: [
          { role: "user", text: "Quiero guardar un contacto nuevo" },
          { role: "bot", text: "¿Cuál es el nombre y correo del contacto?" },
          { role: "user", text: "Es mi jefe, boss@empresa.com" },
          { role: "bot", text: "Ok, tu contacto ha sido creado." }
        ]
      },
      {
        title: "Integración",
        messages: [
          { role: "user", text: "Agenda reunión con Carlos a las 5" },
          { role: "bot", text: "ℹ️ No tengo el correo de Carlos. Agendaré sin invitado. \nSi quieres, crea el contacto con: 'agrega contacto Carlos correo@dominio.com'." }
        ]
      },
      {
        title: "Verificación",
        messages: [
          { role: "user", text: "¿Tengo el correo de Sofía?" },
          { role: "bot", text: "Sí, tienes el contacto de Sofia (sofia@mail.com)." },
          { role: "user", text: "Mostrar contactos" },
          { role: "bot", text: "Aquí están tus contactos:\n- Sofía (sofia@mail.com)" }
        ]
      }
    ]
  },

  {
    id: "lists",
    title: "Listas y Notas",
    icon: FileText,
    description: "Crea listas de supermercado, tareas o deseos. Harold las gestiona por ti.",
    instruction: "Di: 'Crea lista de [nombre]'.",

    quickExamples: [
      {
        title: "Lista Rápida",
        user: "Crea lista super con Leche y Pan",
        bot: "Ok, tu lista de Super ha sido creada."
      },
      {
        title: "Ver Listas",
        user: "Mostrar listas",
        bot: "Tus listas:\n1. Super (2 items)\n2. Pendientes (5 items)"
      },
      {
        title: "Agregar Item",
        user: "Agrega manzanas a la lista super",
        bot: "Ok, tu lista ha sido actualizada."
      }
    ],

    flows: [
      {
        title: "Creación Interactiva",
        messages: [
          { role: "user", text: "Quiero hacer una lista de regalos" },
          { role: "bot", text: "¿Qué elementos quieres agregar?" },
          { role: "user", text: "Libro para papá" },
          { role: "bot", text: "¿Quieres agregar otro elemento?" },
          { role: "user", text: "Perfume para mamá, y listo" },
          { role: "bot", text: "Ok, tu lista de Regalos ha sido creada." }
        ]
      },
      {
        title: "Borrar Lista",
        messages: [
          { role: "user", text: "Borra la lista de regalos" },
          { role: "bot", text: "Ok, lista 'Regalos' eliminada (deleted=true)." }
        ]
      },
      {
        title: "Recuperar",
        messages: [
          { role: "user", text: "¿Qué tenía en la lista super?" },
          { role: "bot", text: "Lista 'Super':\n- Leche\n- Pan\n- Manzanas" }
        ]
      }
    ]
  },
  {
    id: "cancel",
    title: "Cancelar Acciones",
    icon: XCircle,
    description: "El botón de pánico. Detiene cualquier flujo activo o borra datos.",
    instruction: "Di: 'Harold cancela todo'.",

    quickExamples: [
      {
        title: "Stop",
        user: "Harold cancela",
        bot: "Acción cancelada. Volvemos al inicio."
      },
      {
        title: "Borrar Rec",
        user: "Borra el recordatorio de las 5",
        bot: "Ok, listo. He borrado el recordatorio."
      },
      {
        title: "Corrección",
        user: "Me equivoqué, cancela eso",
        bot: "Entendido, descartando la última acción."
      }
    ],

    flows: [
      {
        title: "Interrupción",
        messages: [
          { role: "user", text: "Agendar reunión..." },
          { role: "bot", text: "¿Me puedes indicar la fecha y hora?" },
          { role: "user", text: "sabes que, me equivoque, mejor llamame ahora" },
          { role: "bot", text: "Acción cancelada. Iniciando flujo LLAMADAS.\n📞 Llamada programada." }
        ]
      },
      {
        title: "Borrado Masivo",
        messages: [
          { role: "user", text: "Borra todos mis recordatorios" },
          { role: "bot", text: "He eliminado todos tus recordatorios pendientes." }
        ]
      },
      {
        title: "Desvincular",
        messages: [
          { role: "user", text: "Elimina mis datos de calendar" },
          { role: "bot", text: "Tokens de Google Calendar eliminados. Ya no tengo acceso." }
        ]
      }
    ]
  },
  {
    id: "friends",
    title: "Social (Próximamente)",
    icon: Users,
    isComingSoon: true,
    description: "Pronto podrás enviar recordatorios a los WhatsApp de tus amigos o grupos.",
    instruction: "Función en desarrollo 🚧",
    
    quickExamples: [
      {
        title: "Avisar a otro",
        user: "Dile a @Pedro que traiga hielo",
        bot: "🚧 Próximamente: Enviaré un mensaje a Pedro."
      },
      {
        title: "Grupo",
        user: "Recuérdanos a @Familia la cena",
        bot: "🚧 Próximamente: Notificación grupal."
      },
      {
        title: "Estado",
        user: "¿Avisaste a Juan?",
        bot: "🚧 Próximamente..."
      }
    ],
    flows: [
       {
        title: "Demo Futura",
        messages: [
          { role: "user", text: "Crea recordatorio grupal para el asado" },
          { role: "bot", text: "Próximamente podrás gestionar eventos compartidos aquí." }
        ]
      }
    ]
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeContent = categories.find((c) => c.id === activeTab);

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-4 md:px-8 font-sans selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Aprende a hablar con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Harold</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Descubre los comandos reales. Selecciona una categoría para ver ejemplos de situaciones rápidas y flujos conversacionales completos.
          </p>
        </div>

        {/* LAYOUT PRINCIPAL */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- SIDEBAR DE NAVEGACIÓN --- */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">
              Superpoderes
            </p>
            
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide snap-x">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                const Icon = cat.icon;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`
                      snap-center relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 shrink-0
                      ${isActive 
                        ? "bg-slate-900 border border-slate-700 shadow-lg shadow-emerald-900/10 ring-1 ring-emerald-500/20" 
                        : "hover:bg-slate-900/40 border border-transparent hover:border-slate-800"
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-r-full"></div>
                    )}

                    <div className={`p-2 rounded-lg ${isActive ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400"}`}>
                      <Icon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold text-sm md:text-base ${isActive ? "text-white" : "text-slate-300"}`}>
                        {cat.title}
                      </h3>
                      {cat.isComingSoon && (
                        <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full mt-1 inline-block">
                          Próximamente
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- ÁREA DE CONTENIDO (DERECHA) --- */}
          <div className="lg:w-3/4 animate-fade-in">
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[800px]">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-emerald-500/5 to-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

              {/* Título de Categoría */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl text-white shadow-lg">
                    <activeContent.icon size={32} />
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold text-white">{activeContent.title}</h3>
                     <p className="text-slate-400 text-sm mt-1">{activeContent.description}</p>
                     
                     {/* --- AVISO IMPORTANTE (SOLO SI EXISTE) --- */}
                     {activeContent.warning && (
                       <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200 text-xs flex gap-3 items-start animate-pulse-slow">
                         <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                         <span><strong className="font-bold">Nota:</strong> {activeContent.warning}</span>
                       </div>
                     )}
                  </div>
                </div>

                {/* Caja de Instrucción */}
                <div className="bg-slate-950/50 border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <MessageSquare size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wide">Comando Básico</span>
                    <p className="text-slate-200 font-medium font-mono text-sm md:text-base mt-0.5">
                      {activeContent.instruction}
                    </p>
                  </div>
                </div>
              </div>

              {/* --- SECCIÓN 1: SHOTS RÁPIDOS (GRID) --- */}
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <Sparkles size={16} className="text-yellow-400"/> Situaciones Rápidas
              </h4>
              
              {/* Grid adaptable para mostrar todos los cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {activeContent.quickExamples.map((ex, i) => (
                   <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl hover:border-emerald-500/30 transition-all flex flex-col justify-between h-full">
                      <span className="text-xs text-slate-500 font-bold uppercase mb-3 block">{ex.title}</span>
                      
                      <div className="space-y-3 text-xs">
                          {/* User Msg */}
                          <div className="bg-emerald-600/20 text-emerald-50 p-2.5 rounded-lg rounded-tr-none ml-auto max-w-[95%] border border-emerald-500/10">
                             {ex.user}
                          </div>
                          {/* Bot Msg */}
                          <div className="bg-slate-800 text-slate-300 p-2.5 rounded-lg rounded-tl-none mr-auto max-w-[95%] border border-slate-700">
                             {ex.bot}
                          </div>
                      </div>
                   </div>
                ))}
              </div>

              {/* --- SECCIÓN 2: FLUJOS DE CONVERSACIÓN (GRID) --- */}
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-blue-400"/> Conversaciones Reales
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {activeContent.flows?.map((flow, i) => (
                    <div key={i} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       
                       <h5 className="text-slate-200 font-bold text-sm mb-4 pb-2 border-b border-slate-800">
                          {flow.title}
                       </h5>

                       <div className="space-y-3 text-sm">
                          {flow.messages.map((msg, idx) => (
                             <div 
                               key={idx} 
                               className={`p-3 rounded-xl max-w-[90%] text-xs leading-relaxed ${
                                 msg.role === "user" 
                                   ? "bg-emerald-600/10 text-emerald-100 ml-auto rounded-tr-none border border-emerald-500/10" 
                                   : "bg-slate-800/80 text-slate-300 mr-auto rounded-tl-none border border-slate-700/50"
                               }`}
                             >
                                {msg.role === "bot" && (
                                   <span className="block text-[9px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Harold</span>
                                )}
                                {msg.text}
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;