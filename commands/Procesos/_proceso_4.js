/*CMD
  command: /proceso_4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Requiere mantenimiento. Contratando el servicio técnico de AiresVal, el costo de la reparación sería de 20$.
  keyboard: Contáctanos,  \nReiniciar Consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
