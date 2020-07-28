/*CMD
  command: /proceso_7
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Posiblemente el sistema de arranque del ventilador está fallando o el motor está averiado. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 15 y 45$. Este precio incluye el cambio de motor en caso de ser necesario.
  keyboard: Contáctanos, \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
