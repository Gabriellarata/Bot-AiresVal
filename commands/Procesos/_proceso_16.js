/*CMD
  command: /proceso_16
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Las rolineras del motor pueden estar desgastadas o dañadas. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 30$.
  keyboard: Contáctanos, \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
