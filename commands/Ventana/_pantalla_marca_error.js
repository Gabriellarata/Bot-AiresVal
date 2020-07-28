/*CMD
  command: /pantalla_marca_error
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿La pantalla marca algún error o algo fuera de lo normal?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/proceso_13")
}
if(message=="No"){
  Bot.runCommand("/sopla")
}
if(message=="Ir atrás"){
  Bot.runCommand("/enciende")
}
