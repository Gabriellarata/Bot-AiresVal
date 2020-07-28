/*CMD
  command: /proceso_6
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Posiblemente exista un problema con la tarjeta o el cable que conecta las dos unidades esté haciendo un mal contacto. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 25 y 30$.
  keyboard: Contáctanos,  \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
