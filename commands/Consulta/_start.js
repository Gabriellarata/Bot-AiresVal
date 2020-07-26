/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Consulta
  answer: Para iniciar selecciona "Empezar consulta".
  keyboard: Empezar consulta
  aliases: 
CMD*/

if(message=="Empezar consulta"){
  Bot.runCommand("/ventana_o_split")
}
