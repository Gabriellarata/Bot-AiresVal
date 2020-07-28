/*CMD
  command: /proceso_8
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Puede que el sistema de arranque del compresor esté fallando o el mismo esté averiado . Contratando el servicio técnico de AiresVal, el costo de la reparación puede ser a partir de 20$.
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
