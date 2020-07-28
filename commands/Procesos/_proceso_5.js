/*CMD
  command: /proceso_5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: Las rolineras del motor interno pueden estar desgastadas y la carcasa podría estar mal ajustada. Contratando el servicio técnico de AiresVal, el costo de la reparación estaría entre 20 y 35$.
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
