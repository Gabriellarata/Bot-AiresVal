/*CMD
  command: /proceso_17
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: El equipo requiere mantenimiento. Contratando el servicio técnico de AiresVal, el costo sería de 20$.
  keyboard: Contáctanos,  \nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
