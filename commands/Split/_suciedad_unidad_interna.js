/*CMD
  command: /suciedad_unidad_interna
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿La unidad interna presenta bastante suciedad?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_4")
}
if(message=="No"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_9")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/desde_cuando_split")
}
