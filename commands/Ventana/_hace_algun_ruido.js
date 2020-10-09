/*CMD
  command: /hace_algun_ruido
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Hace algún ruido fuera de lo normal?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/modo_ventilador")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}
if(message=="Ir atrás"){
  Bot.runCommand("/se_congela")
}
if(message=="Ir atrás"){
  Bot.runCommand("/se_congela")
}
