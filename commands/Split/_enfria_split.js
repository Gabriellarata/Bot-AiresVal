/*CMD
  command: /enfria_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Enfría?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/gotea_split")
}
if(message=="No"){
  Bot.runCommand("/unidad_externa")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/sopla_split")
}
