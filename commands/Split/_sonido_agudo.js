/*CMD
  command: /sonido_agudo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Es un sonido agudo?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_5")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/unidad_interna")
}
