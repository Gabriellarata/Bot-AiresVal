/*CMD
  command: /enciende
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/pantalla_marca_error")
}
if(message=="No"){
  Bot.runCommand("/proceso_12")
}
if(message=="Ir atrás"){
  Bot.runCommand("/control_o_perilla")
}
