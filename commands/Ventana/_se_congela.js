/*CMD
  command: /se_congela
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Se congela?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/desde_cuando_ventana")
}
if(message=="No"){
  Bot.runCommand("/hace_algun_ruido")
}
if(message=="Ir atrás"){
  Bot.runCommand("/enfria")
}
