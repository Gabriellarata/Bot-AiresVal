/*CMD
  command: /necesitamos_revisarlo1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Procesos

  <<ANSWER
✅ La información que has suministrado no es suficiente para realizar un diagnóstico. 
❄️ Contacta el servicio técnico de AiresVal y con gusto enviaremos a uno de nuestros especialistas para realizar una inspección más profunda.
  ANSWER
  keyboard: Contáctanos,\nReiniciar consulta
  aliases: 
CMD*/


if(message=="Contáctanos"){
  Bot.runCommand("/contactanos")
}
if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
