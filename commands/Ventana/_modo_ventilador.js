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
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_16")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}
if(message=="Ir atrás"){
  Bot.runCommand("/hace_algun_ruido")
}
