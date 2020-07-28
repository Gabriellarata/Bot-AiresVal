/*CMD
  command: /ventana_o_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Consulta
  answer: ¿Qué tipo de aire acondicionado tienes?
  keyboard: Ventana, Split
  aliases: 
CMD*/

if(message=="Ventana"){
  Bot.runCommand("/control_o_perilla")
}
if(message=="Split"){
  Bot.runCommand("/enciende_split")
}

