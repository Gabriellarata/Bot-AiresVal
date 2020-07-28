/*CMD
  command: /modo_ventilador
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Al ponerlo en modo ventilador, el sonido continúa y es agudo?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/proceso_16")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}
if(message=="Ir atrás"){
  Bot.runCommand("/hace_algun_ruido")
}
