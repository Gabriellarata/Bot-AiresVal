/*CMD
  command: /proceso_15
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Existe la posibilidad de que el sistema de arranque del compresor esté fallando o el mismo esté averiado . Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 60$.
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/start")
}
