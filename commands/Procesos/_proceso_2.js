/*CMD
  command: /proceso_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos

  <<ANSWER
⚙️ Posiblemente tiene una falla en la tarjeta o en el motor de la unidad interna. 
👨🏻‍🔧 Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 45$. Este precio incluye el cambio de motor en caso de que sea necesario.
  ANSWER
  keyboard: Contáctanos, \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
