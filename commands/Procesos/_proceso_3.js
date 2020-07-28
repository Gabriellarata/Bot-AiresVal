/*CMD
  command: /proceso_3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Posiblemente tiene una falla en la tarjeta o en el motor de la unidad interna. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 35$. Este precio incluye el cambio de motor en caso de que sea necesario. 
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
