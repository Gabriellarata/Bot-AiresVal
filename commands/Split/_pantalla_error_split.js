/*CMD
  command: /pantalla_error_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿La pantalla marca algún error o dice algo fuera de lo normal?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/proceso_2")
}
if(message=="No"){
  Bot.runCommand("/sopla_split")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/enciende_split")
}
