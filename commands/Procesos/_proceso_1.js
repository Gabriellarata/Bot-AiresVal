/*CMD
  command: /proceso_1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Puede que tenga problemas con la alimentación del equipo o con la tarjeta. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 25$.

  keyboard: Contáctanos,  \nReiniciar Consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
