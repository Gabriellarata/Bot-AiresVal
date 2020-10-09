/*CMD
  command: /proceso_12
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos

  <<ANSWER
⚙️ Existe la posibilidad de que el equipo tenga problemas en la alimentación o fallas en a tarjeta.
👨🏻‍🔧 Contratando el servicio técnico de AiresVal, el costo aproximado de la reparación estaría entre 20 y 25$.
  ANSWER
  keyboard: Contáctanos,  \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="\nReiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
