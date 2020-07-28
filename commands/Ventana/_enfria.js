/*CMD
  command: /enfria
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Enfría?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/se_congela")
}
if(message=="No"){
  Bot.runCommand("/no_enfria_compresor_enciende")
}
if(message=="Ir atrás"){
  Bot.runCommand("/sopla")
}
