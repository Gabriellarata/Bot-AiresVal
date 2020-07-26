/*CMD
  command: /necesitamos_revisarlo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos
  answer: La información que has suministrado no es suficiente para realizar un diagnóstico. Contacta el servicio técnico de AiresVal y enviaremos a uno de nuestros especialistas para realizar una inspección más profunda.
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/

if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
