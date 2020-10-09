/*CMD
  command: /sopla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Sopla?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/enfria")
}
if(message=="No"){
  Bot.runCommand("/no_sopla_compresor_enciende")
}
if(message=="Ir atrás"){
  Bot.runCommand("/control_o_perilla")
}
