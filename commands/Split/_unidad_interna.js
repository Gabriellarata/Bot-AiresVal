/*CMD
  command: /unidad_interna
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿La unidad interna hace algún ruido?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/sonido_agudo")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/gotea_split")
}
