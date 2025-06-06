
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Más, En Menos Tiempo." subheadline="Con nuestro Curso de Ventas Express, ayudamos a dueños de negocios a vender en redes sociales en solo 3 semanas, sin anuncios pagados." cta1="¡Empieza Hoy!" />
<How step1Title="Inscríbete al Curso" step1Desc="Anota para Curso de Ventas Express." step2Title="Aprende Técnicas de Venta" step2Desc="Transforma tus ventas sin anuncios pagados." step3Title="Digitaliza tus Ventas" step3Desc="Vende más en redes sociales en menos de 24 horas." />
<Aboutus headline="WebGo: Digitalizamos tus ventas eficientemente" subheadline="Facilitamos la digitalización de tus ventas, generando resultados sin sacrificar tu tiempo. Nos diferenciamos por nuestra eficiencia y accesibilidad." beneficiotitulo1="Ventas Express Online" beneficio1="Curso para vender en redes sin anuncios pagados." beneficiotitulo2="Tiempo y Eficiencia" beneficio2="Manejamos tu digitalización, tú te enfocas en crecer" />
<Services heading="Digitaliza Tus Ventas Sin Esfuerzo" description="Curso de Ventas Express te enseña a vender en redes sociales sin anuncios pagados. Aprende a generar ventas online sin necesidad de un sitio web complicado." services={[{"name":"Contenido Estratégico","icon":"content","description":"Aprende a crear contenido que vende."},{"name":"Gestión de Redes","icon":"network","description":"Maneja tus redes sin estrés."},{"name":"Optimización SEO","icon":"seo","description":"Posiciona tu negocio en la web."},{"name":"Fidelización de Clientes","icon":"customers","description":"Convierte clientes en embajadores de tu marca."},{"name":"Ventas Express","icon":"sales","description":"Vende rápido y efectivo sin anuncios pagados."},{"name":"Soporte 24/7","icon":"support","description":"Te acompañamos en cada paso de tu proceso."}]} />
<BeforeAndAfter subheadline="Transformaciones asombrosas, logrando la perfección en cada proyecto" />
<Faq faqs={[{"pregunta":"¿Qué me ofrece el Curso de Ventas Express que no pueda aprender por mi cuenta en Internet?","respuesta":"El Curso de Ventas Express de WebGo está diseñado específicamente para dueños de negocios como tú, que quieren digitalizar sus ventas. Te enseña cómo vender en redes sociales sin gastar en anuncios pagados, una habilidad que no se aprende fácilmente por cuenta propia. Además, ofrece una estructura de aprendizaje de 3 semanas, lo que permite digerir y aplicar la información de manera efectiva."},{"pregunta":"¿Es el Curso de Ventas Express útil si no tengo tiempo para gestionar un sitio web por mi cuenta?","respuesta":"Exactamente, ese es uno de los principales beneficios del Curso de Ventas Express. Te enseñamos cómo vender efectivamente en las redes sociales, así puedes digitalizar tus ventas sin necesidad de gestionar un sitio web complicado. Esto te ahorra tiempo y te permite enfocarte en lo que mejor sabes hacer: administrar tu negocio."},{"pregunta":"¿El precio del Curso de Ventas Express justifica su valor?","respuesta":"Absolutamente. Por tan solo $120.000 CLP o USD 150, obtienes acceso a un curso de 3 semanas que puede transformar completamente tu estrategia de ventas. El conocimiento y las habilidades que adquieres pueden conducir a un aumento dramático en las ventas online, lo que hace que la inversión inicial valga la pena."},{"pregunta":"¿Cómo me ayudará el Curso de Ventas Express a vender más si actualmente solo vendo por recomendación?","respuesta":"El Curso de Ventas Express te enseña cómo aprovechar las redes sociales para llegar a un público más amplio. Esto se traduce en más ventas, incluso sin anuncios pagados. Y no te preocupes, no abandonamos el poder de la recomendación. Te mostramos cómo usar las redes sociales para obtener nuevas recomendaciones y convertirlas en ventas."},{"pregunta":"¿Necesito ser un experto en tecnología para aprovechar al máximo el Curso de Ventas Express?","respuesta":"No, no necesitas ser un experto en tecnología. Nuestro curso está diseñado para ser fácilmente accesible para todos, independientemente de su nivel de experiencia con la tecnología. Te guiaremos paso a paso a través de todo lo que necesitas saber para digitalizar tus ventas con éxito."}]} />
<BookAppointment 
                      heading="Transforma tu negocio con ventas digitales" 
                      description="Participa en nuestro Curso de Ventas Express y descubre cómo multiplicar tus ingresos sin anuncios pagados. Ideal para pequeños empresarios que buscan innovar y crecer."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="CJhnUNzlcNWa9RBB87X9wZ0A1wz1"
                    />
<Footer />
    </main>
  );
}
