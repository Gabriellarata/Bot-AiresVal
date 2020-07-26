/*CMD
  command: /filtro_sucio
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿La parte donde van los filtros se ve bastante sucia?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/proceso_17")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/desde_cuando_ventana")
}
