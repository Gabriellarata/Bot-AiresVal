/*CMD
  command: /proceso_9
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Al parecer el equipo tiene una fuga y requiere refrigerante . Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 25 y 35$.
  keyboard: Contáctanos,  \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
