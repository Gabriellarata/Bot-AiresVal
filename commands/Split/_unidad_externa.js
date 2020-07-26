/*CMD
  command: /unidad_externa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿La unidad externa enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/ventilador_funciona")
}
if(message=="No"){
  Bot.runCommand("/proceso_6")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/enfria")
}
