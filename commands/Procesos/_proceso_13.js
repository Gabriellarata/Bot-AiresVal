/*CMD
  command: /proceso_13
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Posiblemente tiene una falla en la tarjeta electrónica. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 25$.
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
