/*CMD
  command: /gotea_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Gotea?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_4")
}
if(message=="No"){
  Bot.runCommand("/unidad_interna")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/enfria_split")
}
