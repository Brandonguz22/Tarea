//Tarea 1. Calcular la tarifa diaria dada una tarifa por hora

//Un cliente se pone en contacto con el freelancer para preguntar sobre sus tarifas. El freelancer explica que trabajan 8 horas al día. Sin embargo, el freelancer solo conoce sus tarifas por hora para el proyecto. Ayúdelos a estimar una tarifa diaria dada una tarifa por hora.


let FreeLancer = 10; 
let Cliente = 8; 
let tarifaDiaria = FreeLancer * Cliente;

console.log("La tarifa diaria es: $" + tarifaDiaria);


//Tarea 2. Calcular el número de días de trabajo dado un presupuesto fijo

//Otro día, el jefe de proyecto le ofrece al freelancer trabajar en un proyecto con un presupuesto fijo. Dado el presupuesto fijo y la tarifa por hora del freelancer, ayúdelo a calcular la cantidad de días que trabajaría hasta que se agote el presupuesto. El resultado debe redondearse hacia abajo al número entero más cercano.

const PresupuestoFijo = 1000;
const TarifaPorHora = 10; 
const HorasPorDia = 8;  
const NumeroDeDias = PresupuestoFijo / (TarifaPorHora * HorasPorDia);

console.log("El número de días de trabajo es: " + NumeroDeDias);


//Tarea 3. Calcule la tasa de descuento para grandes proyectos

//A menudo, los clientes del freelancer lo contratan para proyectos que abarcan varios meses. En estos casos, el freelancer decide ofrecer un descuento por cada mes completo, y los días restantes se facturan a tarifa diaria. Cada mes tiene 22 días facturables. Ayúdelos a estimar el costo de dichos proyectos, dada una tarifa por hora, la cantidad de días que dura el proyecto y una tasa de descuento mensual. El descuento siempre se pasa como un número, donde 42% se convierte en 0.42. El resultado debe redondearse al número entero más próximo.



const ingresosEsperados = 100000; 
const costosEsperados = 50000; 
const numeroDeMeses = 12; 
const descuento = 0.42; 

const tasaDeDescuento = ((ingresosEsperados - costosEsperados) / ingresosEsperados) * (22 * numeroDeMeses) * descuento;

console.log("La tasa de descuento es: " + tasaDeDescuento);